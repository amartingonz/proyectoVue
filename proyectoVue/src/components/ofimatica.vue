<script setup>
</script>

<template>
      <div class="greetings">
        <h1 class="green">Ofimatica</h1>
        <div class="listado">
            <ul>
                <li>Nombre: Curso de Access</li>
                <li>Duración: 20h</li>
                <li><img src="../assets/img/ofimatica/access.png" alt="" srcset=""></li>
                <li><button>Inscribirse</button></li>
                <!-- <li><a href="http://localhost:5173/src/assets/pdf/ofimatica/Access.pdf" target="_blank">Obtener Información</a></li> -->
                <li><a href="https://proyectovue-ca4b7.web.app/pdf/ofimatica/Access.pdf" target="_blank">Obtener Información</a></li>

            </ul>
            <ul>
                <li>Nombre: Curso de Word</li>
                <li>Duración: 17h</li>
                <li><img src="../assets/img/ofimatica/word.png" alt="" srcset=""></li>
                <li><button>Inscribirse</button></li>
                <!-- <li><a href="http://localhost:5173/src/assets/pdf/ofimatica/Word.pdf" target="_blank">Obtener Información</a></li> -->
                <li><a href="https://proyectovue-ca4b7.web.app/pdf/ofimatica/Word.pdf" target="_blank">Obtener Información</a></li>
            </ul>
            <ul>
                <li>Nombre: Curso de Excel</li>
                <li>Duración: 16h</li>
                <li><img src="../assets/img/ofimatica/excel.png" alt="" srcset=""></li>
                <li><button>Inscribirse</button></li>
                <!-- <li><a href="http://localhost:5173/src/assets/pdf/ofimatica/Excel.pdf" target="_blank">Obtener Información</a></li> -->
                <li><a href="https://proyectovue-ca4b7.web.app/pdf/ofimatica/Excel.pdf" target="_blank">Obtener Información</a></li>

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
