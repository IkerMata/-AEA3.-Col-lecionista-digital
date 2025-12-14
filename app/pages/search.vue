<template>
  <div class="page-container">
    <h1>Pàgina de Cerca</h1>

    <div class="search-bar">
      <input v-model="query" placeholder="Busca un item..." />
      <button @click="search" :disabled="loading" class="ai-button">
        {{ loading ? "Carregant..." : "Cerca" }}
      </button>
    </div>

    <div v-if="error" class="status error">{{ error }}</div>

    <div v-if="results && results.length" class="results">
      <ItemCard v-for="item in results" :key="getId(item)" :item="item">
        <template #actions>
          <button @click="toggleFavorite(item)" class="ai-button-small">
            ❤️
          </button>

          <div v-if="aiResults[getId(item)]" class="ai-result">
            {{ aiResults[getId(item)] }}
          </div>
        </template>
      </ItemCard>
    </div>
  </div>
</template>

<script setup>
const { query, results, loading, error, search } = useSearch();
const store = useFavoritesStore();
const ai = useGemini();

const aiResults = ref({});
const aiLoading = ref({});

function getId(item) {
  return item?.idMeal || item?.id || item?.data?.[0]?.nasa_id || "";
}

function toggleFavorite(item) {
  const id = getId(item);
  if (!id) return;

  if (store.isFavorite(id)) store.removeFavorite(id);
  else store.addFavorite({ id, item });
}
</script>

<style scoped>
.page-container {
  max-width: 1000px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #f0f4f8;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
  color: #0b3d91;
  margin-bottom: 1.5rem;
}

.search-bar {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.search-bar input {
  padding: 0.5rem;
  flex: 1;
  max-width: 400px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.ai-button,
.ai-button-small {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.ai-button:hover:not(:disabled),
.ai-button-small:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
}

.ai-button:disabled,
.ai-button-small:disabled {
  cursor: not-allowed;
  opacity: 0.7;
}

.ai-button-small {
  padding: 0.3rem 0.6rem;
  font-size: 0.9rem;
  margin: 0 2px;
}

.results {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.detail-btn {
  margin-left: 4px;
}

.ai-result {
  margin-top: 8px;
  font-size: 0.9rem;
  color: #333;
  background-color: #e0e7ff;
  padding: 0.3rem 0.5rem;
  border-radius: 6px;
}

.status.error {
  color: red;
  text-align: center;
  margin-bottom: 1rem;
}
</style>
