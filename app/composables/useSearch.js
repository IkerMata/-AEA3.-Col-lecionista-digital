import { ref } from "vue";
import { useApi } from "./useApi";

export const useSearch = () => {
  const api = useApi();
  const query = ref("");
  const results = ref([]);
  const loading = ref(false);
  const error = ref(null);

  const search = async () => {
    if (!query.value) {
      results.value = [];
      return;
    }

    loading.value = true;
    error.value = null;

    try {
      const imagesApi = "https://images-api.nasa.gov/search";
      const resp = await api.get(imagesApi, { params: { q: query.value } });
      results.value = resp.data.collection?.items || [];
    } catch (e) {
      console.error(e);
      error.value = "Error carregant dades de la NASA.";
    } finally {
      loading.value = false;
    }
  };

  return { query, results, loading, error, search };
};