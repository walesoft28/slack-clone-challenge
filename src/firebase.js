import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyABs0Nf3y1esdVtVqor8PD3dCVFlSuUOdI",
    authDomain: "slack-clone-challenge-26003.firebaseapp.com",
    projectId: "slack-clone-challenge-26003",
    storageBucket: "slack-clone-challenge-26003.appspot.com",
    messagingSenderId: "753651201559",
    appId: "1:753651201559:web:f1d47a146b2c6504b78e52",
    measurementId: "G-VC4H1JEMCB"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  export default db;