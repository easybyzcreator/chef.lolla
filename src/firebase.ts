import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxUN2u8dvc5eQiAVRCfgSFii6rnA2Jiww",
  authDomain: "app-chef-lolla.firebaseapp.com",
  projectId: "app-chef-lolla",
  storageBucket: "app-chef-lolla.firebasestorage.app",
  messagingSenderId: "534244420140",
  appId: "1:534244420140:web:3cd65bda1659cf6d54bf89",
  measurementId: "G-ET3D83RWGX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export let analytics: any = null;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      try {
        analytics = getAnalytics(app);
      } catch (e) {
        console.warn("Analytics not initialized:", e);
      }
    }
  }).catch(() => {});
}

