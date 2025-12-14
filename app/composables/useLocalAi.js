// Configuración para LM Studio
// LM Studio suele correr en el puerto 1234 por defecto
const client = new OpenAI({
  baseURL: import.meta.env.VITE_LMSTUDIO_URL || "http://localhost:1234/v1",
  apiKey: "lm-studio", // No es necesaria, pero la librería pide un string no vacío
  dangerouslyAllowBrowser: true, // Necesario para que funcione en Vue (frontend)
});

export const useLocalAI = () => {
  const aiResponse = ref("");
  const isGenerating = ref(false);
  const error = ref(null);

  const generateCreativeText = async (itemName) => {
    isGenerating.value = true;
    error.value = null;
    aiResponse.value = "";

    try {
      const prompt = `YOU ARE A BARMAN AND YOU HAVE TO tell a beverage to go with THIS FOOD: "${itemName}". The answer must be max 40 words.`;

      // LM Studio usa la estructura de "Chat Completions"
      const completion = await client.chat.completions.create({
        messages: [{ role: "user", content: prompt }],
        model: "local-model", // LM Studio usará el modelo que tengas cargado, el nombre aquí es irrelevante
        temperature: 0.7,
      });

      console.log("Respuesta LM Studio:", completion);

      // La estructura de respuesta de OpenAI es diferente a la de Google
      aiResponse.value = completion.choices[0].message.content;
    } catch (e) {
      console.error("Error Local AI:", e);
      // Manejo de errores comunes de conexión local
      if (
        e.message?.includes("Connection refused") ||
        e.message?.includes("Failed to fetch")
      ) {
        error.value =
          "Error: Asegúrate de que LM Studio tiene el servidor iniciado (Start Server).";
      } else {
        error.value = "Error al conectar con el modelo local.";
      }
    } finally {
      isGenerating.value = false;
    }
  };

  return { aiResponse, isGenerating, error, generateCreativeText };
};
