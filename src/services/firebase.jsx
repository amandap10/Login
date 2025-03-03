import firebase from "firebase/compat/app";

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyB8obt-XmgOaMLrhKQHjPrC-DpoM1xxpsQ",
    authDomain: "login-8382d.firebaseapp.com",
    projectId: "login-8382d",
    storageBucket: "login-8382d.firebasestorage.app",
    messagingSenderId: "983745753154",
    appId: "1:983745753154:web:b3ecbc1d30615ba29fbddb",
    measurementId: "G-98JZ8JN0HW"
}

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database };