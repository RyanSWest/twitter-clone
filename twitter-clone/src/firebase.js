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


// Said It had gone over the daily Data Limit, retry right here
// const firebaseConfig = {
//   apiKey: "AIzaSyBElyzUlBB2SzRspQ5uZZCVK0jfshX6Jew",
//   authDomain: "twitter2-40173.firebaseapp.com",
//   projectId: "twitter2-40173",
//   storageBucket: "twitter2-40173.appspot.com",
//   messagingSenderId: "1084387144723",
//   appId: "1:1084387144723:web:b0f83d98241953c638bbe6",
//   measurementId: "G-YW0DBDTC88"
// };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;