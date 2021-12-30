import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import 'firebase/firestore';
import {getStorage} from "firebase/storage"
import { getFirestore } from "firebase/firestore/lite";
const firebaseConfig = {
  apiKey: "AIzaSyDcBGNOcK3UgAdjwLFujE7aEwWt9Odhl7U",
  authDomain: "my-userprofile.firebaseapp.com",
  projectId: "my-userprofile",
  storageBucket: "my-userprofile.appspot.com",
  messagingSenderId: "413070426365",
  appId: "1:413070426365:web:918fe70eb0eb4b70effe94",
  measurementId: "G-NFDVN5LV90"
};
  
  const app = initializeApp(firebaseConfig);
  export const auth= getAuth()
  export const db = getFirestore(app)
  export const storagee = getStorage(app)
 


  