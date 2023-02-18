<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'

import { RouterLink, RouterView} from 'vue-router'

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    <nav>
      <router-link to="/">Inicio</router-link> |
      <router-link to="/ofimatica">Ofimatica</router-link> |
      <router-link to="/programacion">Programación</router-link> |
      <router-link to="/sistemas">Sistemas Operativos</router-link> |
      <router-link to="/registro">Registro</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/administracion">Administración</router-link> |

      <!-- <router-link to="/registro">Registro</router-link> | -->

      <!-- <router-link to="/privado">Privado</router-link> | -->
    </nav>
  </header>

  <main>
    <router-view></router-view>

  </main>
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
