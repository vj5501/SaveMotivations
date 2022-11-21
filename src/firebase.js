// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore"


// import * as firebase from "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlz3fBclkqIwPByR-ystfEtVZ-uTYKGKU",
  authDomain: "savemotivation.firebaseapp.com",
  projectId: "savemotivation",
  storageBucket: "savemotivation.appspot.com",
  messagingSenderId: "337341255722",
  appId: "1:337341255722:web:83e14835ec89f05d217353",
  measurementId: "G-FWSRQNPYZ2",

  // apiKey : `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  // authDomain : `${process.env.REACT_APP_AUTH_DOMAIN}`,
  // projectId : `${process.env.REACT_APP_PROJECT_ID}`,
  // storageBucket : `${process.env.REACT_APP_STORAGE_BUCKET}`,
  // messagingSenderId : `${process.env.REACT_APP_MESSAGING_SENDER_ID}`,
  // appId :`${process.env.REACT_APP_APP_ID}`,
  // measurementId : `${process.env.REACT_APP_MEASUREMENT_ID}`
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
 //const provider = new GoogleAuthProvider();

export const db = getFirestore(app);

// provider.addScope('https://www.googleapis.com/auth/contacts.readonly');


// signInWithPopup(auth, provider)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     // The signed-in user info.
//     const user = result.user;
//     // ...
//   }).catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.customData.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });
  export {auth};
