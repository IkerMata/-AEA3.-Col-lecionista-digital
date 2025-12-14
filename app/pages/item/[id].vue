<template>
  <div class="ai-container">
    <h1>Item Detail</h1>
    <p>ID: {{ id }}</p>
  </div>
</template>

<script setup>
const route = useRoute(); // Nuxt version (sense imports)
const id = route.params.id;

const { aiResponse, isGenerating, generateCreativeText } = useGemini();
</script>
