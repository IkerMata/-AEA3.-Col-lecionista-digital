<template>
  <div class="ai-container">
    <div>
      <h1>Item Detail</h1>
      <p>ID: {{ id }}</p>
    </div>
  </div>
</template>
<script setup>
import { useGemini } from "../composables/useGemini";
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.id

// Dins del setup o script setup
const { aiResponse, isGenerating, generateCreativeText } = useGemini();
</script>