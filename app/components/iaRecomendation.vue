<template>
  <div class="ai-container">
    <button
      class="ai-button"
      @click="generateCreativeText(info)"
      :disabled="isGenerating"
      :class="{ 'is-generating': isGenerating }"
    >
      <span class="button-content">
        {{ isGenerating ? "🤔 Pensant..." : "✨ Recomana una beguda" }}
      </span>
    </button>

    <transition name="fade">
      <div v-if="aiResponse" class="response-box">
        <div class="response-icon">🍹</div>
        <p class="response-text">{{ aiResponse }}</p>
      </div>
    </transition>
  </div>
</template>

<script setup>
const { aiResponse, isGenerating, generateCreativeText } = useGemini();
const props = defineProps(["info"]);
</script>

<style scoped>
.ai-container {
  margin: 1.5rem 0;
  padding: 1.25rem;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
  border-radius: 12px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.ai-button {
  width: 100%;
  padding: 0.875rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
  position: relative;
  overflow: hidden;
}

.ai-button::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  transition: left 0.5s ease;
}

.ai-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
}

.ai-button:hover:not(:disabled)::before {
  left: 100%;
}

.ai-button:active:not(:disabled) {
  transform: translateY(0);
}

.ai-button:disabled {
  cursor: not-allowed;
  opacity: 0.8;
}

.ai-button.is-generating {
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
  0%,
  100% {
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
  }
  50% {
    box-shadow: 0 4px 25px rgba(102, 126, 234, 0.8);
  }
}

.button-content {
  position: relative;
  z-index: 1;
}

.response-box {
  margin-top: 1.25rem;
  padding: 1.25rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  border-radius: 10px;
  border-left: 4px solid #667eea;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.response-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.response-text {
  margin: 0;
  line-height: 1.6;
  color: #2c3e50;
  font-size: 0.95rem;
}

/* Animació fade-in */
.fade-enter-active {
  animation: fadeIn 0.5s ease-in;
}

.fade-leave-active {
  animation: fadeOut 0.3s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
