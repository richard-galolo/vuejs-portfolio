<script setup>
  import { SpeedInsights } from "@vercel/speed-insights/nuxt";
  import { ref, watch, onMounted } from 'vue';

  const isDarkMode = ref(false);

  const updateTheme = (value) => {
    const theme = value ? 'dark' : 'light';
    document.querySelector('html').setAttribute('data-theme', theme);
    localStorage.setItem('darkMode', JSON.stringify(value));
  };

  watch(isDarkMode, updateTheme);

  onMounted(() => {
    const storedDarkMode = JSON.parse(localStorage.getItem('darkMode'));
    isDarkMode.value = storedDarkMode ?? false;
    updateTheme(isDarkMode.value);
  });

  provide('isDarkMode', isDarkMode);
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
  <SpeedInsights />
</template>