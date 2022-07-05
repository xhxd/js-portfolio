// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-analytics.js";
import {
  getFirestore,
  addDoc,
  collection,
  Timestamp,
  serverTimestamp,
  getDocs,
  deleteDoc,
  doc,
  orderBy,
  query,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.8.3/firebase-firestore.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.8.3/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAE9BJBA9MbnB3muknUWh0qFuw5PTg_Z4",
  authDomain: "portfolio-a900d.firebaseapp.com",
  projectId: "portfolio-a900d",
  storageBucket: "portfolio-a900d.appspot.com",
  messagingSenderId: "142123351146",
  appId: "1:142123351146:web:fd3ba126df70a37cdcde13",
  measurementId: "G-TJRP21N206",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export {
  db,
  addDoc,
  collection,
  Timestamp,
  serverTimestamp,
  getDocs,
  deleteDoc,
  doc,
  orderBy,
  query,
  onSnapshot,
  auth,
  signInWithEmailAndPassword,
};
