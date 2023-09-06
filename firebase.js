// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVD3M0Qt9rEbgi7dItP7Y5s1VETmPlU64",
  authDomain: "twitter-clone-178a7.firebaseapp.com",
  projectId: "twitter-clone-178a7",
  storageBucket: "twitter-clone-178a7.appspot.com",
  messagingSenderId: "973667259466",
  appId: "1:973667259466:web:e0aa0f4161464b23ad82b3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage()
