<script setup>
// Aqui importo lo necesario para darle funcionalidad
import {auth} from "@/firebase";
import {onAuthStateChanged} from "firebase/auth";
import {ref} from "vue";
import { RouterLink, RouterView} from 'vue-router'
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
    nombreUsuario.value = "";
    router.push('/inicio');
  }).catch((error) => {
    // An error happened.
  });
}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    <nav>
      {{ nombreUsuario }} |
      <router-link to="/">Inicio</router-link> |
      <router-link to="/ofimatica">Ofimatica</router-link> |
      <router-link to="/programacion">Programación</router-link> |
      <router-link to="/sistemas">Sistemas Operativos</router-link> |
      <router-link to="/registro" v-if="nombreUsuario == ''">Registro</router-link> |
      <router-link to="/login" v-if="nombreUsuario == ''" >Login</router-link> |
      <router-link to="/administracion" v-if="nombreUsuario != ''">Administración</router-link> |
      <button v-if="nombreUsuario != ''"  @click="cerrarSesion">Cerrar Sesion</button>
    </nav>
  </header>

  <main>
    <router-view></router-view>

  </main>
  <br>
  <v-footer>
    <p>Alejandro Martín González</p>
    <a href="#">Politica de Privacidad</a>
    <br>
    <a href="#">649019746</a>
  </v-footer>
</template>

<style scoped>
header {
  line-height: 1.5;
  width: auto;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
