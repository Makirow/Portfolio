// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyA4ZGb0a8VahdqCUpkM8omn5N0UOH88280",
  authDomain: "my-chat-app-b2312.firebaseapp.com",
  projectId: "my-chat-app-b2312",
  storageBucket: "my-chat-app-b2312.appspot.com",
  messagingSenderId: "822177675069",
  appId: "1:822177675069:web:d27c23b98b914a18047754"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();