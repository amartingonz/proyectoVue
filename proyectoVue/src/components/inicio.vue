<script setup>

</script>

<template>
  <div class="greetings">
    <h1 class="green">Inicio</h1>
    <p>Somos una empresa de cursos en línea enfocada en la enseñanza de habilidades de informática y tecnología. Ofrecemos una amplia variedad de cursos diseñados por expertos en la materia, disponibles en múltiples formatos y accesibles desde cualquier dispositivo. Nuestro objetivo es brindar una experiencia de aprendizaje en línea efectiva y de alta calidad para nuestros estudiantes.</p>
    <img src="../assets/img/oak.png" alt="" srcset="">
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
