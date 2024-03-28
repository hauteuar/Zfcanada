// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBqqk7JB-DQ1l3RKj86rvP5Au0pSlFLqJE",
    authDomain: "zfcanada-f5181.firebaseapp.com",
    projectId: "zfcanada-f5181",
    storageBucket: "zfcanada-f5181.appspot.com",
    messagingSenderId: "630213565216",
    appId: "1:630213565216:web:308fc7c5df59eafa495545",
    measurementId: "G-QESL24XWT7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage };

