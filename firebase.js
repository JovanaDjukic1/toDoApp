import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {

  apiKey: "AIzaSyD0XKE6OKAtC8UvO1SN2iVuP7htJgZlpWE",

  authDomain: "todoapp-b0b8e.firebaseapp.com",

  projectId: "todoapp-b0b8e",

  storageBucket: "todoapp-b0b8e.appspot.com",

  messagingSenderId: "762143183489",

  appId: "1:762143183489:web:ff4b72a9c4fcccb6757380",

  measurementId: "G-J0NV7XHYX1"

};
const app = initializeApp(firebaseConfig);
const auth= getAuth()
const db = getFirestore();

export {
  auth,
  db
}