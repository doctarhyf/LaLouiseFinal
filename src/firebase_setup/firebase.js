import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCKzgxyaT9PZxPvq-WDESCnTyV6Ap0E_A8",
  authDomain: "lalouise-6ef7b.firebaseapp.com",
  projectId: "lalouise-6ef7b",
  storageBucket: "lalouise-6ef7b.appspot.com",
  messagingSenderId: "843021144425",
  appId: "1:843021144425:web:e2f0d3e3cdbd86f7d3edf8",
  measurementId: "G-7DGT07PB1Y"
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
const db = getFirestore(app);

export { db };
