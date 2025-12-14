<template>
  <nav class="navbar">
    <NuxtLink to="/">Home</NuxtLink> |
    <NuxtLink to="/search">Search</NuxtLink> |
    <NuxtLink to="/favorites">Favorites</NuxtLink>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: #0b3d91;
  padding: 1rem 2rem;
  text-align: center;
  border-radius: 8px;
  margin-bottom: 2rem;
}

.navbar a {
  color: #ffffff;
  text-decoration: none;
  font-weight: bold;
  margin: 0 0.5rem;
}

.navbar a:hover {
  text-decoration: underline;
  color: #a8c4ff;
}
</style>
