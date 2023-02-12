// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-storage.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyeFpPjDuQanpTRE1ls-dPD9-9M-n3rQI",
  authDomain: "invitation-221015.firebaseapp.com",
  projectId: "invitation-221015",
  storageBucket: "invitation-221015.appspot.com",
  messagingSenderId: "969916697202",
  appId: "1:969916697202:web:26f12496284a6ea94190eb",
  measurementId: "G-3FRVF01YBK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
// Get a reference to the storage service, which is used to create references in your storage bucket
export const storage = getStorage(app);