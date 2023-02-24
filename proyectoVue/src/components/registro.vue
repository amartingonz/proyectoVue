<script setup>
import { ref } from "vue";
import { auth } from "../firebase.js";
import { createUserWithEmailAndPassword} from "@firebase/auth";
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword , signInWithPopup , GoogleAuthProvider } from "@firebase/auth";


    var usuario = ref(""), contrasena = ref("");
    // Función para registrar un usuario en la base de datos.
    function altaUsuario(){
            createUserWithEmailAndPassword(auth, usuario.value, contrasena.value)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
  });
  }
</script>
<template>
    <div class="greetings">
        <br>
        Usuario:
        <br>
        <input type='text' v-model="usuario"/>
        <br>
        Password:
        <br>
        <input type='password' v-model="contrasena"/>
        <br>
        <button type="submit" @click="altaUsuario()">Crear</button>
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
