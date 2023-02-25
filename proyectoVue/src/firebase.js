// Aqui importo lo necesario para darle funcionalidad
import { initializeApp } from 'firebase/app'
import { getFirestore,collection } from 'firebase/firestore'
import { getAuth } from 'firebase/auth';

export const firebaseApp = initializeApp({
    apiKey: "AIzaSyDZaSbXcSW_jHkXuP0KN-8gn_4YayPB6pE",
    authDomain: "proyectovue-ca4b7.firebaseapp.com",
    projectId: "proyectovue-ca4b7",
    storageBucket: "proyectovue-ca4b7.appspot.com",
    messagingSenderId: "429312023256",
    appId: "1:429312023256:web:65503b69ae43d0b98595ad"
})


const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);