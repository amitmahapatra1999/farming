import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyARVaMsLSDufTNNH5gE7Z_YTobGZsScrm4",
  authDomain: "farmer-a8533.firebaseapp.com",
  projectId: "farmer-a8533",
  storageBucket: "farmer-a8533.appspot.com",
  messagingSenderId: "654350427307",
  appId: "1:654350427307:web:8cfcd984dc1e0befc7c3ee",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
const serverTimeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { auth, db, storage, serverTimeStamp };
