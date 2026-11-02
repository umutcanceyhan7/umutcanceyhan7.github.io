import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import { getAuth, connectAuthEmulator, type Auth } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator, type Firestore } from "firebase/firestore";

// Firebase ayarları ortam değişkenlerinden gelir (.env.local veya GitHub Actions değişkenleri).
const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

export const ALLOWED_EMAIL = "umutcanceyhan@gmail.com";

export const isConfigured = Boolean(config.apiKey && config.authDomain && config.projectId && config.appId);

let cached: { app: FirebaseApp; auth: Auth; db: Firestore } | null = null;

export function getFirebase() {
  if (cached) return cached;
  if (!isConfigured) throw new Error("Firebase ayarları eksik.");
  const app = getApps()[0] ?? initializeApp(config);
  const auth = getAuth(app);
  // Varsayılan bellek önbelleği: müşteri verisi tarayıcıya yazılmaz.
  const db = getFirestore(app);
  if (process.env.NEXT_PUBLIC_FIREBASE_USE_EMULATOR === "1") {
    connectAuthEmulator(auth, "http://127.0.0.1:9099", { disableWarnings: true });
    connectFirestoreEmulator(db, "127.0.0.1", 8080);
    // Sadece emülatör testleri için: sahte Google hesabıyla giriş.
    (window as unknown as Record<string, unknown>).__testSignIn = async (email: string) => {
      const { GoogleAuthProvider, signInWithCredential } = await import("firebase/auth");
      const token = JSON.stringify({ sub: email, email, email_verified: true });
      return signInWithCredential(auth, GoogleAuthProvider.credential(token));
    };
  }
  cached = { app, auth, db };
  return cached;
}

export function isAllowed(user: { email: string | null; emailVerified: boolean } | null) {
  return Boolean(user && user.emailVerified && user.email?.toLowerCase() === ALLOWED_EMAIL);
}
