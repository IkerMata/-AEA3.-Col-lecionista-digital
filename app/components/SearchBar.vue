<template>
  <div class="search-input">
    <input v-model="value" placeholder="Busca..." />
    <button @click="emitSearch">Cerca</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const emit = defineEmits(["search"]);
const value = ref("");

function emitSearch() {
  emit("search", value.value);
}
</script>

<style scoped>
.search-input {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  margin: 1rem 0;
}

.search-input input {
  padding: 0.5rem;
  flex: 1;
  max-width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
}

.search-input button {
  padding: 0.5rem 1rem;
  background-color: #1a73e8;
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
}

.search-input button:hover {
  background-color: #155ab6;
}
</style>
