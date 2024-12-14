// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        // class: 'dark', // Adds the 'dark' class to the <html> tag
        style: 'scroll-padding-top: 5rem; scroll-behavior: smooth;',
        "data-theme": 'light'
      },
      title: 'Richard Galolo',
      meta: [
        { name: 'description', content: 'Welcome to the portfolio of Richard Galolo, a skilled PHP Laravel developer. Explore my journey, projects, and expertise in web development.' },
        { name: 'author', content: 'Richard Galolo' },
        { name: 'keywords', content: 'Richard Galolo, PHP, Laravel, web development, backend development, portfolio' },
        { property: 'og:title', content: 'Richard Galolo' },
        { property: 'og:url', content: 'https://richardgalolo.com' },
        { property: 'og:description', content: 'Discover the professional portfolio of Richard Galolo, showcasing expertise in PHP Laravel development and modern web solutions.' },
        { property: 'og:image', content: '/_nuxt/assets/img/profile.jpg'} // Use `/` instead of `~/assets` for static files
      ],
      link: [
        { rel: 'icon', type: 'image/jpeg', href: '/_nuxt/assets/img/profile.jpg'} // Favicon image
      ]
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
