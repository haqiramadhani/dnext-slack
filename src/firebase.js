import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBYRL6o71pUBKdoQP-E-4rDIWm-HoYV0QA",
  authDomain: "slack-clone-c2812.firebaseapp.com",
  projectId: "slack-clone-c2812",
  storageBucket: "slack-clone-c2812.appspot.com",
  messagingSenderId: "346631407121",
  appId: "1:346631407121:web:cad3ab35d7be856b6f93b0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
