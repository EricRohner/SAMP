import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyAvwIqiGp2DD7cbUWSaoFUC8Vb-xWeYAb8",
    authDomain: "samp-b9240.firebaseapp.com",
    databaseURL: "https://samp-b9240.firebaseio.com",
    projectId: "samp-b9240",
    storageBucket: "samp-b9240.appspot.com",
    messagingSenderId: "528466230919"
};

firebase.initializeApp(config);

export default firebase;
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();