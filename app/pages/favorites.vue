<template>
  <div class="favorites-page">
    <h1>Favorites</h1>

    <div v-if="favorites.length === 0" class="empty">
      No hi ha favorits encara.
    </div>

    <div v-else class="results">
      <ItemCard v-for="f in favorites" :key="f.id" :item="f.item" />
    </div>
  </div>
</template>

<script setup>
const store = useFavoritesStore();
const favorites = computed(() => store.favorites);
</script>

<style scoped>
.favorites-page {
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
}

h1 {
  color: #333;
  margin-bottom: 1rem;
}

.empty {
  color: #666;
  font-style: italic;
}

.results {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1rem;
}
</style>
