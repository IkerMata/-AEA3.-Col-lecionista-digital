import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://images-api.nasa.gov",
  headers: { "Content-Type": "application/json" },
});

export const useApi = () => {
  const get = (url, config = {}) => apiClient.get(url, config);
  const post = (url, body) => apiClient.post(url, body);
  return { get, post };
};

