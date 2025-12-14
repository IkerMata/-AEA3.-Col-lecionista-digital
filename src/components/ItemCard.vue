<template>
  <div class="item-card">
    <h3>{{ title }}</h3>
    <img v-if="image" :src="image" alt="image" style="max-width:200px" />
    <slot name="actions" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps(['item'])

const title = computed(() => props.item?.data?.[0]?.title || 'Sense títol')
const image = computed(() => props.item?.links?.[0]?.href || '')
const id = computed(() => props.item?.data?.[0]?.nasa_id || '')
</script>

<style>
.item-card { border: 1px solid #ddd; padding: 1rem; border-radius: 8px; text-align: center; }
.item-card img { width: 100%; border-radius: 4px; }
.description { margin: 0.5rem 0; color: #555; }
</style>
