
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyBcMZeyLiwRGBl6fZFmUVBDXbjU0DzUne0",
  authDomain: "my-project-first-64f53.firebaseapp.com",
  projectId: "my-project-first-64f53",
  storageBucket: "my-project-first-64f53.appspot.com",
  messagingSenderId: "933954243670",
  appId: "1:933954243670:web:1a8fc86cf745654522fff7",
  measurementId: "G-HR8F59R96P"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);