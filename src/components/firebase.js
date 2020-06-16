import * as firebase from "firebase/app";
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyBlgBRP_9Tq7aWkUXhFvp8hpCo_NDz2Md0",
    authDomain: "car-rental-a7ab0.firebaseapp.com",
    databaseURL: "https://car-rental-a7ab0.firebaseio.com",
    projectId: "car-rental-a7ab0",
    storageBucket: "car-rental-a7ab0.appspot.com",
    messagingSenderId: "875139912220",
    appId: "1:875139912220:web:d2aa9939db1fc8832945d9",
    measurementId: "G-40LDZS0C1Z"
});

export default app;