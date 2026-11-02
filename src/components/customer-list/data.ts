import {
  addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, orderBy, query,
  serverTimestamp, updateDoc, writeBatch, type Unsubscribe,
} from "firebase/firestore";
import { getFirebase } from "./firebase";

export type Customer = { id: string; name: string };
export type Job = { id: string; description: string; date: string; fee: number | null };

const customersRef = () => collection(getFirebase().db, "customers");
const jobsRef = (customerId: string) => collection(getFirebase().db, "customers", customerId, "jobs");

export function watchCustomers(onData: (c: Customer[]) => void, onError: (e: Error) => void): Unsubscribe {
  return onSnapshot(
    query(customersRef(), orderBy("name")),
    (snap) => onData(snap.docs.map((d) => ({ id: d.id, name: String(d.data().name ?? "") }))),
    onError,
  );
}

export function watchJobs(customerId: string, onData: (j: Job[]) => void, onError: (e: Error) => void): Unsubscribe {
  return onSnapshot(
    query(jobsRef(customerId), orderBy("date", "desc")),
    (snap) => onData(snap.docs.map((d) => toJob(d.id, d.data()))),
    onError,
  );
}

function toJob(id: string, x: Record<string, unknown>): Job {
  return {
    id,
    description: String(x.description ?? ""),
    date: String(x.date ?? ""),
    fee: typeof x.fee === "number" ? x.fee : null,
  };
}

export const addCustomer = (name: string) =>
  addDoc(customersRef(), { name, createdAt: serverTimestamp() });

export const renameCustomer = (id: string, name: string) =>
  updateDoc(doc(customersRef(), id), { name, updatedAt: serverTimestamp() });

// Müşteriyi ve tüm işlerini birlikte siler.
export async function deleteCustomer(id: string) {
  const jobs = await getDocs(jobsRef(id));
  const batch = writeBatch(getFirebase().db);
  jobs.docs.forEach((d) => batch.delete(d.ref));
  batch.delete(doc(customersRef(), id));
  await batch.commit();
}

export type JobInput = Omit<Job, "id">;

export const addJob = (customerId: string, j: JobInput) =>
  addDoc(jobsRef(customerId), { ...j, createdAt: serverTimestamp() });

export const updateJob = (customerId: string, jobId: string, j: JobInput) =>
  updateDoc(doc(jobsRef(customerId), jobId), { ...j, updatedAt: serverTimestamp() });

export const deleteJob = (customerId: string, jobId: string) => deleteDoc(doc(jobsRef(customerId), jobId));

// Tüm veriyi tek JSON dosyası olarak indirir. Tarayıcıya hiçbir şey kaydedilmez.
export async function downloadBackup() {
  const customers = await getDocs(query(customersRef(), orderBy("name")));
  const data = await Promise.all(
    customers.docs.map(async (c) => {
      const jobs = await getDocs(query(jobsRef(c.id), orderBy("date", "desc")));
      return { id: c.id, name: c.data().name, jobs: jobs.docs.map((j) => toJob(j.id, j.data())) };
    }),
  );
  const now = new Date();
  const payload = { app: "musteri-defteri", version: 1, exportedAt: now.toISOString(), customers: data };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `musteri-defteri-yedek-${now.toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return data.length;
}

export const formatTL = (n: number) =>
  new Intl.NumberFormat("tr-TR", { style: "currency", currency: "TRY", maximumFractionDigits: 2 }).format(n);

export const formatDate = (iso: string) => {
  const [y, m, d] = iso.split("-").map(Number);
  if (!y || !m || !d) return iso;
  return new Intl.DateTimeFormat("tr-TR", { day: "numeric", month: "long", year: "numeric" }).format(new Date(y, m - 1, d));
};

export const trLower = (s: string) => s.toLocaleLowerCase("tr-TR");
