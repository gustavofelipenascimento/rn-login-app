import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCuF-hS3NOFVUEPRRRxBwtiCgpOlpxBkys",
  authDomain: "rn-login-app-15562.firebaseapp.com",
  projectId: "rn-login-app-15562",
  storageBucket: "rn-login-app-15562.appspot.com",
  messagingSenderId: "163196285336",
  appId: "1:163196285336:web:eb28a1479a209b2e0b3bed",
  measurementId: "G-0LPB64LQYL"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
