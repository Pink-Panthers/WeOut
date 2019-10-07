import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBGIEo61tMmP8sbdCbeujtSSI1BR94DE00",
  authDomain: "weout-7dc89.firebaseapp.com",
  databaseURL: "https://weout-7dc89.firebaseio.com",
  projectId: "weout-7dc89",
  storageBucket: "weout-7dc89.appspot.com",
  messagingSenderId: "122621961076",
  appId: "1:122621961076:web:42abe472d8ddc310174221",
  measurementId: "G-N4FE3XSPBD"
};

firebase.initializeApp(firebaseConfig);

const db = firebse.firestore()

export default db
