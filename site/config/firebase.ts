import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
import { getStorage } from "firebase/storage";

// const config = {
//   apiKey: "AIzaSyCE1RPJyvOxlK9oRxm8Tke1j2_KByGokh8",
//   authDomain: "my-pro-363712.firebaseapp.com",
//   projectId: "my-pro-363712",
//   storageBucket: "my-pro-363712.appspot.com",
//   messagingSenderId: "473885907050",
//   appId: "1:473885907050:web:804223cb7157b50bca1213",
//   measurementId: "G-EVL87BVPES",
// };

const config = {
  apiKey: "AIzaSyDmgrmJuvPpY95DES70wZfBFJMh4E-6xcc",
  authDomain: "infinitydriver.firebaseapp.com",
  projectId: "infinitydriver",
  storageBucket: "infinitydriver.appspot.com",
  messagingSenderId: "299371860442",
  appId: "1:299371860442:web:b71355d86819b40fde70e3",
  measurementId: "G-SFFN56NF3G"

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

