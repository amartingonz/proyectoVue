<script setup>

    import { ref } from "vue"
    import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

    import { auth } from "../firebase.js";

    let usuario=ref(""), password=ref("")
    
    // Función para login mediante Correo

    function logindeUsuario(){

        signInWithEmailAndPassword(auth, usuario.value, password.value)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(userCredential.user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error.message);
        });
    }

    // Función para login con Google
    function logindeGoogle(){

        signInWithPopup(auth, new GoogleAuthProvider())
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
    }

</script>


<template>  
    <div class="greetings">
        <label for="usuario">Usuario: </label>
        <br>
        <input type="text" name="usuario" id="usuario" v-model="usuario">
        <br>
        <label for="password">Password: </label>
        <br>
        <input type="password" name="password" id="password" v-model="password">
        <br>
        <button @click="logindeUsuario">Login con Correo</button>
        <br>
        <button @click="logindeGoogle" id="google">Login con Google</button>
        <br>
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