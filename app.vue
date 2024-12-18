<script setup>
  import { SpeedInsights } from "@vercel/speed-insights/nuxt"
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
  <SpeedInsights />
</template>