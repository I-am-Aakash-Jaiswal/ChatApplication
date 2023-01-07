
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.React_App_Firebase_Api,
  authDomain: "ssup-c4212.firebaseapp.com",
  projectId: "ssup-c4212",
  storageBucket: "ssup-c4212.appspot.com",
  messagingSenderId: "812172481788",
  appId: process.env.React_App_Firebase_AppId
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth= getAuth();
export const storage = getStorage();
export const db =getFirestore();