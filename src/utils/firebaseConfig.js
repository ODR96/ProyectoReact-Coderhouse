// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCV8AbLsTgyHJMzV1HYu0wGqpcf_3igooE",
    authDomain: "ecommerce-coder-1ee27.firebaseapp.com",
    projectId: "ecommerce-coder-1ee27",
    storageBucket: "ecommerce-coder-1ee27.appspot.com",
    messagingSenderId: "968348351580",
    appId: "1:968348351580:web:b36a9f165c01c3fcaeba99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//FireStore initialize
const db = getFirestore(app);

export default db;