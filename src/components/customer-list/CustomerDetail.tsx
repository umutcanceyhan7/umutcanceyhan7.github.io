"use client";

import { useEffect, useState, type FormEvent } from "react";
import { addJob, deleteJob, formatDate, formatTL, updateJob, watchJobs, type Customer, type Job, type JobInput } from "./data";
import { Btn, Card, Confirm, ErrorNote, inputClass } from "./ui";

const today = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
};

// "1.500,50" / "1500,5" / "1500.50" / "1500" → sayı. Boş → null. Geçersiz → NaN.
export function parseFee(raw: string): number | null {
  let s = raw.trim().replace(/\s|₺|tl/gi, "");
  if (!s) return null;
  if (s.includes(",")) s = s.replace(/\./g, "").replace(",", ".");
  else if (/^\d{1,3}(\.\d{3})+$/.test(s)) s = s.replace(/\./g, "");
  if (!/^\d+(\.\d{1,2})?$/.test(s)) return NaN;
  return Number(s);
}

type Form = { description: string; date: string; fee: string };
const emptyForm = (): Form => ({ description: "", date: today(), fee: "" });

export default function CustomerDetail({ customer, onBack }: { customer: Customer; onBack: () => void }) {
  const [jobs, setJobs] = useState<Job[] | null>(null);
  const [error, setError] = useState("");
  const [form, setForm] = useState<Form>(emptyForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [toDelete, setToDelete] = useState<Job | null>(null);
  const [deleting, setDeleting] = useState(false);

  useEffect(
    () => watchJobs(customer.id, setJobs, () => setError("İşler yüklenemedi. İnternet bağlantını kontrol et.")),
    [customer.id],
  );

  const total = (jobs ?? []).reduce((sum, j) => (j.fee !== null ? sum + j.fee : sum), 0);

  async function submit(e: FormEvent) {
    e.preventDefault();
    const description = form.description.trim();
    const fee = parseFee(form.fee);
    if (!description || !form.date) return;
    if (Number.isNaN(fee)) {
      setError("Ücret geçersiz. Örnek: 1500 veya 1.500,50");
      return;
    }
    const input: JobInput = { description, date: form.date, fee };
    setSaving(true);
    setError("");
    try {
      if (editingId) await updateJob(customer.id, editingId, input);
      else await addJob(customer.id, input);
      setForm(emptyForm());
      setEditingId(null);
    } catch {
      setError("İş kaydedilemedi. Tekrar dene.");
    } finally {
      setSaving(false);
    }
  }

  function startEdit(j: Job) {
    setEditingId(j.id);
    setForm({ description: j.description, date: j.date, fee: j.fee === null ? "" : String(j.fee).replace(".", ",") });
    setError("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function confirmDelete() {
    if (!toDelete) return;
    setDeleting(true);
    try {
      await deleteJob(customer.id, toDelete.id);
      setToDelete(null);
    } catch {
      setError("İş silinemedi. Tekrar dene.");
    } finally {
      setDeleting(false);
    }
  }

  return (
    <div className="flex flex-col gap-5">
      <div>
        <Btn small onClick={onBack}>← Müşteriler</Btn>
      </div>

      <Card className="p-4 bg-[var(--lavender)]">
        <h2 className="font-heading text-2xl m-0 break-words">{customer.name}</h2>
        <p className="mt-2 mb-0" data-testid="total">
          Toplam alınan ücret: <b className="text-[var(--dark-purple)]">{formatTL(total)}</b>
        </p>
      </Card>

      <Card className="p-4">
        <form onSubmit={submit} className="flex flex-col gap-3">
          <p className="font-heading text-[var(--dark-purple)] m-0">{editingId ? "İşi düzenle" : "Yeni iş"}</p>
          <label className="flex flex-col gap-1 text-sm">
            İş açıklaması
            <textarea
              className={`${inputClass} min-h-20`}
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              maxLength={2000}
              required
            />
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <label className="flex flex-col gap-1 text-sm">
              Tarih
              <input
                type="date"
                className={inputClass}
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                required
              />
            </label>
            <label className="flex flex-col gap-1 text-sm">
              Alınan ücret (TL, isteğe bağlı)
              <input
                className={inputClass}
                inputMode="decimal"
                placeholder="Boş bırakılabilir"
                value={form.fee}
                onChange={(e) => setForm({ ...form, fee: e.target.value })}
              />
            </label>
          </div>
          <div className="flex gap-2 justify-end">
            {editingId && (
              <Btn type="button" onClick={() => { setEditingId(null); setForm(emptyForm()); }}>Vazgeç</Btn>
            )}
            <Btn variant="primary" type="submit" disabled={saving || !form.description.trim() || !form.date}>
              {saving ? "Kaydediliyor…" : editingId ? "Kaydet" : "İşi ekle"}
            </Btn>
          </div>
        </form>
      </Card>

      {error && <ErrorNote>{error}</ErrorNote>}

      {jobs === null ? (
        <p className="text-center py-8">Yükleniyor…</p>
      ) : jobs.length === 0 ? (
        <p className="text-center py-8">Bu müşteri için henüz iş yok.</p>
      ) : (
        <ul className="flex flex-col gap-3 list-none p-0 m-0">
          {jobs.map((j) => (
            <li key={j.id}>
              <Card className="p-4" >
                <div className="flex flex-wrap items-start justify-between gap-2" data-testid="job">
                  <div className="min-w-0 flex-1">
                    <p className="text-sm m-0 opacity-80">{formatDate(j.date)}</p>
                    <p className="m-0 mt-1 whitespace-pre-wrap break-words">{j.description}</p>
                  </div>
                  {j.fee !== null && (
                    <span
                      data-testid="fee"
                      className="shrink-0 rounded-lg border-2 border-[var(--dark-purple)] bg-[var(--mint-green)] px-2 py-1 font-bold text-[var(--dark-purple)]"
                    >
                      {formatTL(j.fee)}
                    </span>
                  )}
                </div>
                <div className="flex justify-end gap-2 mt-3">
                  <Btn small onClick={() => startEdit(j)}>Düzenle</Btn>
                  <Btn small variant="danger" onClick={() => setToDelete(j)}>Sil</Btn>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      )}

      {toDelete && (
        <Confirm
          text={<>Bu iş silinecek: <b>{toDelete.description.slice(0, 80)}</b></>}
          busy={deleting}
          onYes={confirmDelete}
          onNo={() => setToDelete(null)}
        />
      )}
    </div>
  );
}
