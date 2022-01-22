import firebase from 'firebase/app';
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
    apiKey: "AIzaSyDiwgIRGzVFWxZGqPa6I6acWfTiiivI1dE",
    authDomain: "hack-lashikia-0123.firebaseapp.com",
    projectId: "hack-lashikia-0123",
    storageBucket: "hack-lashikia-0123.appspot.com",
    messagingSenderId: "405656368521",
    appId: "1:405656368521:web:42e000fd97f31947259d58",
    measurementId: "G-P2DSJ68Q66"
};

firebase.initializeApp(firebaseConfig);

export const signupWithEmailAndPassword = async (email, password) => {
    try {
        const user = await firebase.auth().signupUserWithEmailAndPassword(email, password)
        alert('success!');
        return user;
    } catch (error) {
        alert('failure');
        console.log(error);
    }
}