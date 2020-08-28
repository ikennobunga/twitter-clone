import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyD8mzfMIiXN6zKyM5MJYqML78sxgb0vNbI",
  authDomain: "twitter-clone-cca4d.firebaseapp.com",
  databaseURL: "https://twitter-clone-cca4d.firebaseio.com",
  projectId: "twitter-clone-cca4d",
  storageBucket: "twitter-clone-cca4d.appspot.com",
  messagingSenderId: "734292395647",
  appId: "1:734292395647:web:fb598897fda36d792d214a",
  measurementId: "G-52ESRFPM06"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export default db