import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
    apiKey: "AIzaSyAFaQD8CQPZyM_c7J-A-HIrfDgMCJ6rGVk",
    authDomain: "bedtimestories-a2977.firebaseapp.com",
    databaseURL: "https://bedtimestories-a2977.firebaseio.com",
    projectId: "bedtimestories-a2977",
    storageBucket: "bedtimestories-a2977.appspot.com",
    messagingSenderId: "630618554876",
    appId: "1:630618554876:web:d39400e7e9ee78a4f57279"
  };

firebase.initializeApp(firebaseConfig);
export default  firebase.firestore()
