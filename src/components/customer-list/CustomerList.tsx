"use client";

import { useEffect, useMemo, useState, type FormEvent } from "react";
import { addCustomer, deleteCustomer, renameCustomer, trLower, watchCustomers, type Customer } from "./data";
import { Btn, Card, Confirm, ErrorNote, inputClass } from "./ui";

export default function CustomerList({ onOpen }: { onOpen: (c: Customer) => void }) {
  const [customers, setCustomers] = useState<Customer[] | null>(null);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [newName, setNewName] = useState("");
  const [saving, setSaving] = useState(false);
  const [editing, setEditing] = useState<{ id: string; name: string } | null>(null);
  const [toDelete, setToDelete] = useState<Customer | null>(null);
  const [deleting, setDeleting] = useState(false);

  useEffect(
    () => watchCustomers(setCustomers, () => setError("Müşteriler yüklenemedi. İnternet bağlantını kontrol et.")),
    [],
  );

  const shown = useMemo(() => {
    const q = trLower(search.trim());
    const list = customers ?? [];
    return (q ? list.filter((c) => trLower(c.name).includes(q)) : list)
      .slice()
      .sort((a, b) => a.name.localeCompare(b.name, "tr"));
  }, [customers, search]);

  async function add(e: FormEvent) {
    e.preventDefault();
    const name = newName.trim();
    if (!name) return;
    setSaving(true);
    setError("");
    try {
      await addCustomer(name);
      setNewName("");
    } catch {
      setError("Müşteri kaydedilemedi. Tekrar dene.");
    } finally {
      setSaving(false);
    }
  }

  async function saveEdit(e: FormEvent) {
    e.preventDefault();
    if (!editing) return;
    const name = editing.name.trim();
    if (!name) return;
    setError("");
    try {
      await renameCustomer(editing.id, name);
      setEditing(null);
    } catch {
      setError("Değişiklik kaydedilemedi. Tekrar dene.");
    }
  }

  async function confirmDelete() {
    if (!toDelete) return;
    setDeleting(true);
    setError("");
    try {
      await deleteCustomer(toDelete.id);
      setToDelete(null);
    } catch {
      setError("Müşteri silinemedi. Tekrar dene.");
    } finally {
      setDeleting(false);
    }
  }

  return (
    <div className="flex flex-col gap-5">
      <Card className="p-4">
        <form onSubmit={add} className="flex gap-2">
          <input
            className={inputClass}
            placeholder="Yeni müşteri adı"
            aria-label="Yeni müşteri adı"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            maxLength={120}
          />
          <Btn variant="primary" type="submit" disabled={saving || !newName.trim()}>
            {saving ? "…" : "Ekle"}
          </Btn>
        </form>
      </Card>

      <input
        className={inputClass}
        type="search"
        placeholder="Müşteri ara"
        aria-label="Müşteri ara"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {error && <ErrorNote>{error}</ErrorNote>}

      {customers === null ? (
        <p className="text-center py-8">Yükleniyor…</p>
      ) : shown.length === 0 ? (
        <p className="text-center py-8">{search ? "Bu adla müşteri yok." : "Henüz müşteri yok. Yukarıdan ekle."}</p>
      ) : (
        <ul className="flex flex-col gap-3 list-none p-0 m-0">
          {shown.map((c) => (
            <li key={c.id}>
              <Card className="p-3">
                {editing?.id === c.id ? (
                  <form onSubmit={saveEdit} className="flex flex-wrap gap-2">
                    <input
                      autoFocus
                      className={`${inputClass} flex-1`}
                      aria-label="Müşteri adı"
                      value={editing.name}
                      onChange={(e) => setEditing({ id: c.id, name: e.target.value })}
                      maxLength={120}
                    />
                    <div className="flex gap-2">
                      <Btn variant="primary" small type="submit" disabled={!editing.name.trim()}>Kaydet</Btn>
                      <Btn small type="button" onClick={() => setEditing(null)}>Vazgeç</Btn>
                    </div>
                  </form>
                ) : (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onOpen(c)}
                      className="flex-1 min-w-0 text-left font-bold text-[var(--dark-purple)] py-2 px-1 truncate hover:underline"
                    >
                      {c.name}
                    </button>
                    <Btn small onClick={() => setEditing({ id: c.id, name: c.name })}>Düzenle</Btn>
                    <Btn small variant="danger" onClick={() => setToDelete(c)}>Sil</Btn>
                  </div>
                )}
              </Card>
            </li>
          ))}
        </ul>
      )}

      {toDelete && (
        <Confirm
          text={<><b>{toDelete.name}</b> ve bu müşterinin tüm işleri silinecek.</>}
          busy={deleting}
          onYes={confirmDelete}
          onNo={() => setToDelete(null)}
        />
      )}
    </div>
  );
}
