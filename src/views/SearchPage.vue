<template>
  <div>
    <h1>Pàgina de Cerca</h1>

    <input v-model="query" placeholder="Busca un item..." />
    <button @click="search">Cerca</button>

    <div v-if="loading">Carregant...</div>
    <div v-if="error">{{ error }}</div>

    <div v-if="results && results.length" class="results">
      <ItemCard v-for="item in results" :key="getId(item)" :item="item">
        <template #actions>
          <button @click="toggleFavorite(item)">❤️</button>

          <button
            @click="askAi(item)"
            :disabled="aiLoading[getId(item)]"
            style="margin-left:8px"
          >
            {{ aiLoading[getId(item)] ? '...' : 'IA' }}
          </button>

          <router-link
            :to="`/item/${getId(item)}`"
            style="margin-left:8px; text-decoration: none;"
          >
            <button>Detall</button>
          </router-link>

          <div v-if="aiResults[getId(item)]" class="ai-result" style="margin-top:8px">
            {{ aiResults[getId(item)] }}
          </div>
        </template>
      </ItemCard>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ItemCard from '@/components/ItemCard.vue'
import { useSearch } from '@/composables/useSearch'
import { useFavoritesStore } from '@/stores/favoritesStore'
import { useGemini } from '@/composables/useGemini'

const { query, results, loading, error, search } = useSearch()
const store = useFavoritesStore()
const ai = useGemini()

// per-item AI state/results
const aiResults = ref({})
const aiLoading = ref({})

function getId(item) {
  return item?.idMeal || item?.id || (item?.data && item.data[0] && item.data[0].nasa_id) || ''
}

function onSearch(value) {
  query.value = value
  search()
}

function toggleFavorite(item) {
  const id = getId(item)
  if (!id) return
  if (store.isFavorite(id)) store.removeFavorite(id)
  else store.addFavorite({ id, item })
}

async function askAi(item) {
  const id = getId(item)
  if (!id) return
  if (aiLoading.value[id]) return
  aiLoading.value = { ...aiLoading.value, [id]: true }
  aiResults.value = { ...aiResults.value, [id]: '' }

  const title = item?.data?.[0]?.title || ''
  const desc = item?.data?.[0]?.description || item?.data?.[0]?.explanation || ''
  const prompt = `Resumeix en una frase aquest element NASA: "${title}". Descripció: ${desc}`

  try {
    const out = await ai.ask(prompt)
    aiResults.value = { ...aiResults.value, [id]: typeof out === 'string' ? out : JSON.stringify(out) }
  } catch (e) {
    console.error(e)
    aiResults.value = { ...aiResults.value, [id]: 'Error obtenint resposta de la IA.' }
  } finally {
    aiLoading.value = { ...aiLoading.value, [id]: false }
  }
}
</script>

<style>
.results {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}
</style>
