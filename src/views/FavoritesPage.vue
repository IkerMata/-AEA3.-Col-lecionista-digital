<template>
  <div>
    <h1>Favorites</h1>
    <div v-if="favorites.length === 0">No hi ha favorits encara.</div>
    <div v-else class="results">
      <ItemCard v-for="f in favorites" :key="f.id" :item="f.item" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useFavoritesStore } from '../stores/favoritesStore'
import ItemCard from '../components/ItemCard.vue'

const store = useFavoritesStore()
const favorites = computed(() => store.favorites)
</script>