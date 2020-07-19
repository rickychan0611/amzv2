const firebase = require("firebase");
// Required for side-effects
require("firebase/auth");
require("firebase/firestore");

firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "amzr-b7fd2.firebaseapp.com",
    databaseURL: "https://amzr-b7fd2.firebaseio.com",
    projectId: "amzr-b7fd2",
    storageBucket: "amzr-b7fd2.appspot.com",
    messagingSenderId: "782988860860",
    appId: "1:782988860860:web:2747696473369e66"
});

const db = firebase.firestore();
export const auth = firebase.auth()
export default db