// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB96wGzuF3fIWm-_nOOXEwYrhjEeSt_lrQ",
  authDomain: "chat-app-b9608.firebaseapp.com",
  projectId: "chat-app-b9608",
  storageBucket: "chat-app-b9608.appspot.com",
  messagingSenderId: "1003053368632",
  appId: "1:1003053368632:web:b2dce5e2e76dda3430adcd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)