<script setup>
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "@/firebase";
import {ref} from "vue";
import { useFirestore,useCollection } from 'vuefire'
import { collection } from 'firebase/firestore'
import { addDoc , deleteDoc} from 'firebase/firestore'
const db = useFirestore();

function crearCurso(){
    console.log('hola');
  const docRef = addDoc(collection(db,"cursos"),{
  nombre: nombre.value,
  duracion : duracion.value
});
}
const cursos = useCollection(collection(db,'cursos'));

let nombreUsuario = ref("");

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    nombreUsuario.value = user.email;
  }
});

function cerrarSesion() {
  auth.signOut().then(() => {
    // Sign-out successful.
    
  }).catch((error) => {
    // An error happened.
  });
}
</script>
<template>
    <div class="greetings">
        <h1>Área Privada</h1>
        <p>Bienvenido {{ nombreUsuario }}</p>
        <button @click="cerrarSesion">Cerrar Sesion</button>
        <h2>Crear Curso</h2>
        <label for="nombre">Nombre del Curso</label>
        <br>
        <input type="text" v-model="nombre">
        <br>
        <label for="duracion">Duración del Curso</label>
        <br>
        <input type="text" v-model="duracion">
        <br>
        <button @click="crearCurso()">Crear Curso</button>
    </div>












</template>
<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}
img{
  width: auto;
  height: 200px;
}
.greetings{
  text-align: center;
}
.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: center;
  }
}
</style>
