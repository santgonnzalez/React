import firebase from "firebase";
import 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkNHqlnGZehWuqqoI4hi8gd59kmoDa0bs",
  authDomain: "backend-proyectocoderreact.firebaseapp.com",
  projectId: "backend-proyectocoderreact",
  storageBucket: "backend-proyectocoderreact.appspot.com",
  messagingSenderId: "877317941465",
  appId: "1:877317941465:web:0398d6297246ddfe12f6c8"
};

  // Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export function getFirestore() {
    return firebase.firestore(app)
}