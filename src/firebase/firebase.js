import firebase from "firebase";

const config = {
  apiKey: "****************",
  authDomain: "****************.firebaseapp.com",
  databaseURL: "****************.firebaseio.com",
  projectId: "****************",
  storageBucket: "****************.appspot.com",
  messagingSenderId: "****************",
  appId: "****************"
};

firebase.initializeApp(config);

export const db = firebase.firestore();
export const functions = firebase.functions();

export default firebase;
