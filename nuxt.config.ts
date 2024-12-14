// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        // class: 'dark', // Adds the 'dark' class to the <html> tag
        style: 'scroll-padding-top: 5rem; scroll-behavior: smooth;',
        "data-theme": 'light'
      },
    },
  },
  compatibilityDate: '2024-11-01',
  devtools: {
    enabled: true
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
