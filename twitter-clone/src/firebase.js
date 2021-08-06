// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyC9PU4Ce-WQppwH6skV8JWOthvlXBrHNVw",
    authDomain: "twitter-clone-a47b0.firebaseapp.com",
    projectId: "twitter-clone-a47b0",
    storageBucket: "twitter-clone-a47b0.appspot.com",
    messagingSenderId: "180373782656",
    appId: "1:180373782656:web:89e891b8ab414758936665",
    measurementId: "G-2NZ6ZVXM1T"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;