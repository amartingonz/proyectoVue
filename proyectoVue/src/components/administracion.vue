<script setup>

import { useFirestore,useCollection } from 'vuefire'
import { collection } from 'firebase/firestore'
import { addDoc , deleteDoc} from 'firebase/firestore'
const db = useFirestore();

function crearCurso(){
  const docRef = addDoc(collection(db,"cursos"),{
  nombre: document.getElementById("nombre").value,
  duracion : document.getElementById("duracion").value,
  categoria : document.getElementById("categoria").value,
  imagen : document.getElementById("imagen").value
});
}
const cursos = useCollection(collection(db,'cursos'));

</script>
<template>
    <div class="greetings">
        <h1>Área Privada</h1>
          <p>Bienvenido {{ nombreUsuario }}</p>
        <h2>Crear Curso</h2>
        <br>
        <label for="categoria">Categoria del Curso</label>
        <br>
        <input type="text" v-model="categoria" id="categoria">
        <br>
        <label for="nombre">Nombre del Curso</label>
        <br>
        <input type="text" v-model="nombre" id="nombre">
        <br>
        <label for="duracion">Duración del Curso</label>
        <br>
        <input type="text" v-model="duracion" id="duracion">
        <br>
        <br>
        <label for="imagen">Imagen</label>
        <br>
        <input type="file" id="categoria">
        <br>
        <button @click="crearCurso()">Crear Curso</button>
        <ul v-for="curso in cursos" :key="curso.id">
            <li>{{ curso.nombre }}</li>
            <li>{{ curso.duracion }}</li>
            <li>{{ curso.categoria }}</li>
            <li>{{ curso.imagen }}</li>
        </ul>
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
