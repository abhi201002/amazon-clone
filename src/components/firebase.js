import { getAuth } from "firebase/auth";
import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDL7aob-Oy_SS7OHNqy-jgOHSDx79cfY2k",
    authDomain: "clone-2c713.firebaseapp.com",
    projectId: "clone-2c713",
    storageBucket: "clone-2c713.appspot.com",
    messagingSenderId: "993989781642",
    appId: "1:993989781642:web:65557388b2e9a762706573",
    measurementId: "G-G29ZNFLCNN"
};

const app = initializeApp(firebaseConfig);
// console.log(app)

// export const db = app.firestore();
const auth = getAuth(app);
console.log(auth);
export {auth};