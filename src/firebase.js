import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const firebaseConfig = {
    apiKey: "AIzaSyAPXQpR02plXWz4j5Fho_p1YJgXjQce4q4",
    authDomain: "linkedin-clone-b5a26.firebaseapp.com",
    projectId: "linkedin-clone-b5a26",
    storageBucket: "linkedin-clone-b5a26.appspot.com",
    messagingSenderId: "450561845789",
    appId: "1:450561845789:web:37239363e5aaad28a8b4f4"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebaseApp.storage();

export { auth, provider, storage };
export default db;