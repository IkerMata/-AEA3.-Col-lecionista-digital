export default defineNuxtConfig({
  modules: ["@pinia/nuxt"],

  runtimeConfig: {
    apiKey: import.meta.env.VITE_API_KEY || "",
    apiBaseUrl: import.meta.env.VITE_API_BASE_URL || "",
    geminiKey: import.meta.env.VITE_GEMINI_KEY || "",

    public: {
      geminiKey: import.meta.env.VITE_GEMINI_KEY || "",
    },
  },
});
