<template>
  <div class="item-card">
    <h3>{{ title }}</h3>
    <img v-if="image" :src="image" alt="image" />

    <!-- Botón IA -->
    <button @click="handleAiClick" :disabled="isGenerating" class="ai-button">
      {{ isGenerating ? "Generando..." : "IA" }}
    </button>

    <!-- Respuesta IA -->
    <p v-if="aiResponse" class="ai-response">{{ aiResponse }}</p>
    <p v-if="error" class="ai-error">{{ error }}</p>

    <!-- Slot de acciones extra -->
    <slot name="actions" />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useGemini } from "~/composables/useGemini";

// Props
const props = defineProps(["item"]);

// Datos de la tarjeta
const title = computed(() => props.item?.data?.[0]?.title || "Sense títol");
const image = computed(() => props.item?.links?.[0]?.href || "");
const id = computed(() => props.item?.data?.[0]?.nasa_id || "");

// Composable IA
const { aiResponse, isGenerating, error, generateCreativeText } = useGemini();

// Función para generar respuesta IA
const handleAiClick = () => {
  generateCreativeText(title.value);
};
</script>

<style scoped>
.item-card {
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 12px;
  text-align: center;
  margin-bottom: 1rem;
  background-color: #f9f9f9;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s, box-shadow 0.2s;
}

.item-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.item-card h3 {
  margin-bottom: 0.5rem;
  color: #0b3d91;
  font-size: 1.1rem;
}

.item-card img {
  width: 100%;
  max-width: 200px;
  border-radius: 8px;
  margin-bottom: 0.5rem;
}

.ai-button {
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}

.ai-button:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.5);
}

.ai-button:disabled {
  cursor: not-allowed;
  opacity: 0.7;
}

.ai-response {
  margin-top: 0.5rem;
  color: #333;
  font-size: 0.95rem;
}

.ai-error {
  margin-top: 0.5rem;
  color: red;
  font-size: 0.95rem;
}
</style>
