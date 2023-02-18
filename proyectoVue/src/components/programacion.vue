<script setup>
</script>

<template>
    <div class="greetings">
      <h1 class="green">Programación</h1>
      <div class="listado">
            <ul>
                <li>Nombre: Curso de Python</li>
                <li>Duración: 20h</li>
                <li><img src="../assets/img/programacion/python.png" alt="" srcset=""></li>
                <li><button>Inscribirse</button></li>
                <li><a href="http://localhost:5173/src/assets/pdf/programacion/Python.pdf" target="_blank">Obtener Información</a></li>
            </ul>
            <ul>
                <li>Nombre: Curso de Java </li>
                <li>Duración: 17h</li>
                <li><img src="../assets/img/programacion/java.png" alt="" srcset=""></li>
                <li><button>Inscribirse</button></li>
                <li><a href="http://localhost:5173/src/assets/pdf/programacion/Java.pdf" target="_blank">Obtener Información</a></li>
            </ul>
            <ul>
                <li>Nombre: Curso de JavaScript</li>
                <li>Duración: 16h</li>
                <li><img src="../assets/img/programacion/js.png" alt="" srcset=""></li>
                <li><button>Inscribirse</button></li>
                <li><a href="http://localhost:5173/src/assets/pdf/programacion/JavaScript.pdf" target="_blank">Obtener Información</a></li>
            </ul>
        </div>
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
li{
  display: inline;
  list-style: none;
  align-items: center;
  margin: 1rem;
}
.listado img{
  width: 100px;
  height: 100px;
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
