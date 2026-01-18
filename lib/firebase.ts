// Firebase configuration with Auth support
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || ""
};

// Check if we have valid Firebase config
const hasValidConfig = 
  firebaseConfig.apiKey && 
  firebaseConfig.projectId && 
  firebaseConfig.authDomain;

// Initialize Firebase only if we have valid configuration
let app: any = null;
let db: any = null;
let auth: any = null;
let googleProvider: GoogleAuthProvider | null = null;
let githubProvider: GithubAuthProvider | null = null;

if (hasValidConfig) {
  try {
    app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
    db = getFirestore(app);
    auth = getAuth(app);
    googleProvider = new GoogleAuthProvider();
    githubProvider = new GithubAuthProvider();
  } catch (error) {
    console.warn('Firebase initialization error (safe to ignore during build):', (error as Error).message);
  }
}

export { app, db, auth, googleProvider, githubProvider };
