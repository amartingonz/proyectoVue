<script setup>
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import { useFirestore, useCollection } from 'vuefire'
import { collection,doc } from 'firebase/firestore'
import { addDoc, deleteDoc , updateDoc  } from 'firebase/firestore'
import ofimatica from './ofimatica.vue';
import programacion from './programacion.vue';
import sistemas from './sistemas.vue';
var storage = getStorage();
const db = useFirestore();
function crearCurso(){
  // Obtener el archivo seleccionado
  const imagen = document.getElementById("imagen").files[0];
  // Crear una referencia de almacenamiento con un nombre único
  const storageRef = ref(storage, 'cursos/' + imagen.name);
  // Cargar el archivo en Firebase Storage
  uploadBytes(storageRef, imagen).then((snapshot) => {
    console.log('Archivo cargado con éxito');
    addDoc(collection(db,"cursos"),{
      nombre: document.getElementById("nombre").value,
      duracion : document.getElementById("duracion").value,
      categoria : document.getElementById("categoria").value,
      imagen : document.getElementById("categoria").src
      });
  }).catch((error) => {
    console.error('Error al cargar el archivo', error);
  });
}

function borrarCurso(id) {
  // FUNCION PARA ELIMINAR CURSOS POR ID
  deleteDoc(doc(db, 'cursos', id))
    .then(() => {
      console.log('Curso eliminado correctamente');
    })
    .catch((error) => {
      console.error('Error al eliminar el curso', error);
    });
}

function editarCurso(id) {
  // Función para actualizar la información de un curso por ID
  const cursoRef = doc(db, 'cursos', id);
  updateDoc(cursoRef, {
    nombre: document.getElementById("nombre").value,
    duracion : document.getElementById("duracion").value,
    categoria : document.getElementById("categoria").value,
    imagen : document.getElementById("categoria").src
  })
    .then(() => {
      console.log('Curso actualizado correctamente');
    })
    .catch((error) => {
      console.error('Error al actualizar el curso', error);
    });
}

const cursos = useCollection(collection(db,'cursos'));






</script>
<template>
    <ofimatica></ofimatica>
    <programacion></programacion>
    <sistemas></sistemas>
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
    <label for="imagen">Imagen </label>
    <input type="file" id="imagen">
    <br>
    <button @click="crearCurso()">Crear Curso</button>
    <hr>
    <ul v-for="curso in cursos" :key="curso.id" style="list-style: none;" class="listas">
      <li>Nuevo Curso:</li>
      <li> Nombre: {{ curso.nombre }}</li>
      <li>Duración: {{ curso.duracion }}</li>
      <li>Categoria: {{ curso.categoria }}</li>
      <li><img src="../assets/img/defecto.png" alt="imagen del curso"></li>
      <li><button @click="borrarCurso(curso.id)">Borrar Curso</button></li>
      <li><button @click="editarCurso(curso.id)">Editar Curso</button></li>

    </ul>
  </div>
</template>
<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
  margin: 1rem;
}
.listas li{
  display: inline-block;
  flex-direction: column;
  align-items: center;
  margin: 0.5rem;
}
h3 {
  font-size: 1.2rem;
}

img{
  width: auto;
  height: 50px;
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
