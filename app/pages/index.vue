<template>
  <div class="home-container">
    <h1>Bienvenido a la NASA Collector</h1>
    <p>Explora imágenes y datos del espacio.</p>

    <nav>
      <NuxtLink to="/search">Buscar Imágenes</NuxtLink> |
      <NuxtLink to="/favorites">Favoritos</NuxtLink>
    </nav>
  </div>
</template>

<script setup>
// Aquí puedes importar composables o datos de la API de NASA si quieres
</script>

<style scoped>
.home-container {
  max-width: 800px;
  margin: 2rem auto;
  text-align: center;
  font-family: Arial, sans-serif;
  background-color: #f0f4f8;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #0b3d91;
  margin-bottom: 1rem;
}

p {
  color: #333;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
}

nav {
  margin-top: 1.5rem;
}

nav a {
  text-decoration: none;
  color: #1a73e8;
  font-weight: bold;
  margin: 0 0.5rem;
}

nav a:hover {
  text-decoration: underline;
}
</style>
