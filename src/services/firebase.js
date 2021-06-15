import firebase from 'firebase/app';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCfxn7COZ21xCJ4VRj3mhJuFc62xdlFlkA",
    authDomain: "react-porfolio-8b57f.firebaseapp.com",
    projectId: "react-porfolio-8b57f",
    storageBucket: "react-porfolio-8b57f.appspot.com",
    messagingSenderId: "658077126415",
    appId: "1:658077126415:web:b82067d50bb7ede317b87a",
    measurementId: "G-BL4WZCCSM5"
}

firebase.initializeApp(config);

const googleProvider = new firebase.auth.GoogleAuthProvider();

const auth = firebase.auth()

function login(){
    auth.signInWithPopup(googleProvider);
}

function logout(){
    auth.signOut();
}

export{
    login,
    logout,
    auth
}