import firebase from 'firebase';

 const firebaseConfig = {
    apiKey: "AIzaSyDQdCBQKGV70_tmksCAN98rF6hor-h7rzQ",
    authDomain: "login-react-firebase-1e7b6.firebaseapp.com",
    databaseURL: "https://login-react-firebase-1e7b6.firebaseio.com",
    projectId: "login-react-firebase-1e7b6",
    storageBucket: "login-react-firebase-1e7b6.appspot.com",
    messagingSenderId: "935092981904",
    appId: "1:935092981904:web:8f180d97f392ea27168815",
    measurementId: "G-WFFNQHWKDB"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  firebase.analytics();


export default fire;