<template>
  <div>
    <input v-model="value" placeholder="Busca..." />
    <button @click="emitSearch">Cerca</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const emit = defineEmits(['search'])
const value = ref('')
function emitSearch() {
  emit('search', value.value)
}
</script>
