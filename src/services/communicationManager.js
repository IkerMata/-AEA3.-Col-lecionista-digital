import axios from "axios";

// Instància preconfigurada sense api_key (Image API no la necessita)
const api = axios.create({
  baseURL: "https://images-api.nasa.gov"
});

// Funció de cerca per paraula clau
export async function searchApi(query) {
  try {
    const response = await api.get("/search", {
      params: { q: query }
    });
    return response.data.collection.items; // retorna array d'items
  } catch (error) {
    console.error("Error a l'API:", error);
    return [];
  }
}

// Funció per obtenir detall d’un item per nasa_id
export async function getItemById(nasa_id) {
  try {
    const response = await api.get(`/asset/${nasa_id}`);
    return response.data.collection.items; // array amb imatges i info
  } catch (error) {
    console.error("Error al obtenir item:", error);
    return null;
  }
}
