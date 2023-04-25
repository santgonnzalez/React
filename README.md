# Documentacion sobre el Ecommerce "ProdigyTech".

## Este proyecto fue creado para la entrega final del curso de React en CoderHouse.
## Santiago Gonzalez. 22023

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
### Para clonar el repo en gihub:
    git clone https://github.com/santgonnzalez/React.git
    cd ProdegyTech
    npm install
    npm start

### Comando para crear app de react:
    npx create-react-app nombre_del_proyecto
    npm start
 

### Instalar react router dom:
    npm install react-router-dom
### Intalar firebase
    npm install firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
const app = initializeApp(firebaseConfig);


-------------------------------------------------------------------------------------------------------------------------------------------------------