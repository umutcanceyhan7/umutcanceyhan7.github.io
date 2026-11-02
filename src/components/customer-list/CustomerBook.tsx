"use client";

import { useEffect, useState } from "react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, type User } from "firebase/auth";
import { getFirebase, isAllowed, isConfigured } from "./firebase";
import { downloadBackup, type Customer } from "./data";
import { Btn, ErrorNote } from "./ui";
import CustomerList from "./CustomerList";
import CustomerDetail from "./CustomerDetail";

type AuthState = { status: "loading" } | { status: "out"; message?: string } | { status: "in"; user: User };

export default function CustomerBook() {
  const [auth, setAuth] = useState<AuthState>({ status: "loading" });
  const [selected, setSelected] = useState<Customer | null>(null);

  useEffect(() => {
    if (!isConfigured) return;
    const { auth: fbAuth } = getFirebase();
    return onAuthStateChanged(fbAuth, async (user) => {
      if (!user) {
        setSelected(null);
        setAuth((prev) => (prev.status === "out" ? prev : { status: "out" }));
        return;
      }
      if (isAllowed(user)) {
        setAuth({ status: "in", user });
        return;
      }
      // Yetkisiz hesap: hemen çıkış yap.
      await signOut(fbAuth);
      setAuth({ status: "out", message: `Yetkiniz yok (${user.email ?? "bilinmeyen hesap"}). Çıkış yapıldı.` });
    });
  }, []);

  if (!isConfigured) {
    return (
      <Shell>
        <ErrorNote>Firebase ayarları eksik. NEXT_PUBLIC_FIREBASE_* değişkenlerini ekleyin.</ErrorNote>
      </Shell>
    );
  }

  if (auth.status === "loading") {
    return (
      <Shell>
        <p className="text-center py-16">Yükleniyor…</p>
      </Shell>
    );
  }

  if (auth.status === "out") return <Login message={auth.message} />;

  return (
    <Shell actions={<Actions />}>
      {selected ? (
        <CustomerDetail customer={selected} onBack={() => setSelected(null)} />
      ) : (
        <CustomerList onOpen={setSelected} />
      )}
    </Shell>
  );
}

function Shell({ children, actions }: { children: React.ReactNode; actions?: React.ReactNode }) {
  return (
    <main lang="tr" className="min-h-screen bg-[var(--cream)]">
      <header className="border-b-[3px] border-[var(--dark-purple)] bg-[var(--cream)] sticky top-0 z-40">
        <div className="mx-auto max-w-3xl px-4 py-3 flex flex-wrap items-center justify-between gap-3">
          <h1 className="font-heading text-xl sm:text-2xl m-0">Müşteri Defteri</h1>
          {actions}
        </div>
      </header>
      <div className="mx-auto max-w-3xl px-4 py-6">{children}</div>
    </main>
  );
}

function Actions() {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function backup() {
    setBusy(true);
    setError("");
    try {
      await downloadBackup();
    } catch {
      setError("Yedek alınamadı. İnternet bağlantını kontrol et.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      <Btn variant="mint" small onClick={backup} disabled={busy}>
        {busy ? "Hazırlanıyor…" : "Yedek al"}
      </Btn>
      <Btn small onClick={() => signOut(getFirebase().auth)}>Çıkış yap</Btn>
      {error && <ErrorNote>{error}</ErrorNote>}
    </div>
  );
}

function Login({ message }: { message?: string }) {
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function login() {
    setBusy(true);
    setError("");
    try {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({ prompt: "select_account" });
      await signInWithPopup(getFirebase().auth, provider);
    } catch (e) {
      const code = (e as { code?: string }).code ?? "";
      if (code !== "auth/popup-closed-by-user" && code !== "auth/cancelled-popup-request") {
        setError("Giriş yapılamadı. Tekrar dene.");
      }
    } finally {
      setBusy(false);
    }
  }

  return (
    <Shell>
      <div className="flex flex-col items-center gap-6 py-16 text-center">
        <p className="max-w-sm">Devam etmek için giriş yap.</p>
        <Btn variant="primary" onClick={login} disabled={busy}>
          {busy ? "Bekleniyor…" : "Google ile giriş yap"}
        </Btn>
        {message && <ErrorNote>{message}</ErrorNote>}
        {error && <ErrorNote>{error}</ErrorNote>}
      </div>
    </Shell>
  );
}
