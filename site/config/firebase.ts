import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
import { getStorage } from "firebase/storage";

const config = {
  apiKey: "AIzaSyDmgrmJuvPpY95DES70wZfBFJMh4E-6xcc",
  authDomain: "infinitydriver.firebaseapp.com",
  projectId: "infinitydriver",
  storageBucket: "infinitydriver.appspot.com",
  messagingSenderId: "299371860442",
  appId: "1:299371860442:web:b71355d86819b40fde70e3",
  measurementId: "G-SFFN56NF3G",
};
export const firebaseApp = !getApps().length ? initializeApp(config) : getApp();

console.log(firebaseApp);
const functions = getFunctions(firebaseApp);
const firestore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);
const auth = getAuth(firebaseApp);

export function docToJSON(doc: any) {
  const data = doc.data();
  return {
    ...data,
    id: doc.id,
    createdAt: data?.createdAt?.toMillis() || 0,
    updatedAt: data?.updatedAt?.toMillis() || 0,
    date: data?.date?.toMillis() || 0,
  };
}

export { auth, firestore, functions, storage };
