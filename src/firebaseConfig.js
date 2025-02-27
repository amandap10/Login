// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB8obt-XmgOaMLrhKQHjPrC-DpoM1xxpsQ",
    authDomain: "login-8382d.firebaseapp.com",
    projectId: "login-8382d",
    storageBucket: "login-8382d.firebasestorage.app",
    messagingSenderId: "983745753154",
    appId: "1:983745753154:web:b3ecbc1d30615ba29fbddb",
    measurementId: "G-98JZ8JN0HW"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Configura a autenticação
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
