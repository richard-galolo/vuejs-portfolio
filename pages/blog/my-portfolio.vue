<script setup>
</script>

<template>
  <div class="relative mx-auto max-w-xl min-h-screen flex flex-col px-4 text-sm">
    <main class="flex-grow">
      <Navbar />

      <!-- Breadcrumbs -->
      <div class="breadcrumbs text-sm">
        <ul class="text-[#747575]">
          <li>
            <NuxtLink to="/blog"
              class="hover:underline decoration-dotted">
              Blog
            </NuxtLink>
          </li>
          <li>My Portfolio</li>
        </ul>
      </div>

      <!-- Title -->
      <section class="mt-4">
        <h1 class="text-2xl font-semibold">My Portfolio</h1>
        <div class="flex justify-between">
          <div class="font-light text-[#747575] mt-2">1min read &#8226; December 29, 2024</div>
          <!-- Share Link -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="none"
            viewBox="0 0 24 24"
            class="mt-2">
            <path fill="currentColor" fill-rule="evenodd" d="M15.218 4.931a.4.4 0 0 1-.118.132l.012.006a.45.45 0 0 1-.292.074.5.5 0 0 1-.3-.13l-2.02-2.02v7.07c0 .28-.23.5-.5.5s-.5-.22-.5-.5v-7.04l-2 2a.45.45 0 0 1-.57.04h-.02a.4.4 0 0 1-.16-.3.4.4 0 0 1 .1-.32l2.8-2.8a.5.5 0 0 1 .7 0l2.8 2.79a.42.42 0 0 1 .068.498m-.106.138.008.004v-.01zM16 7.063h1.5a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-11c-1.1 0-2-.9-2-2v-10a2 2 0 0 1 2-2H8a.5.5 0 0 1 .35.15.5.5 0 0 1 .15.35.5.5 0 0 1-.15.35.5.5 0 0 1-.35.15H6.4c-.5 0-.9.4-.9.9v10.2a.9.9 0 0 0 .9.9h11.2c.5 0 .9-.4.9-.9v-10.2c0-.5-.4-.9-.9-.9H16a.5.5 0 0 1 0-1" clip-rule="evenodd"></path>
          </svg>
        </div>
      </section>

      <section class="mt-8">
        <p class="leading-7">
          Over the past few months, I’ve been researching, designing, and developing this portfolio. After several updates, I’m pleased with the result and excited to share it with you.
        </p>
      </section>

      <section class="mt-8">
        <h4 class="text-lg font-semibold">Goal</h4>
        <p class="leading-7 mt-4">
          This portfolio highlights my expertise in web development, showcasing my ability to deliver client-focused solutions. It emphasizes my technical skills and creative approach, providing a clear perspective on the value I bring to projects.
        </p>
      </section>

      <section class="mt-8">
        <h4 class="text-lg font-semibold">History</h4>
        <p class="leading-7 mt-4">
          This portfolio was created from scratch using the Nuxt.js framework and Tailwind CSS, inspired by a variety of websites and design platforms.
        </p>
      </section>

      <section class="mt-8">
        <h4 class="text-lg font-semibold">Inspirations</h4>
        <p class="leading-7 mt-4">
          I explore platforms like Medium, Reddit, Google, YouTube, and other developer websites, constantly searching for fresh ideas and inspiration. Here are some of my favorites:
        </p>
        <ul class="list-inside list-disc leading-7">
            <li>
              <a
                class="underline underline-offset-1"
                rel="noopener noreferrer"
                target="_blank"
                href="https://magicui.design"
                aria-label="Visit Magic UI Design website">
                Magic UI Design
              </a>
            </li>
            <li>
              <a
                class="underline underline-offset-1"
                rel="noopener noreferrer"
                target="_blank"
                href="https://medium.com"
                aria-label="Visit Medium Design website">
                Medium
              </a>
            </li>
            <li>
              <a
                class="underline underline-offset-1"
                rel="noopener noreferrer"
                target="_blank"
                href="https://indiepa.ge/marclou"
                aria-label="Visit Marc Lou website">
                Marc Lou
              </a>
            </li>
        </ul>
      </section>

      <section class="mt-8">
        <h4 class="text-lg font-semibold">Tech Stack</h4>
        <ul class="list-inside list-disc leading-7 mt-4">
          <li>
            <a
              class="underline underline-offset-1"
              rel="noopener noreferrer"
              target="_blank"
              href="https://nuxt.com"
              aria-label="Visit Nuxt.js website">
              Nuxt.js
            </a>
          </li>
          <li>
            <a
              class="underline underline-offset-1"
              rel="noopener noreferrer"
              target="_blank"
              href="https://tailwindcss.com"
              aria-label="Visit Tailwind CSS website">
              Tailwind CSS
            </a>
          </li>
          <li>
            <a
              class="underline underline-offset-1"
              rel="noopener noreferrer"
              target="_blank"
              href="https://daisyui.com"
              aria-label="Visit Tailwind CSS website">
              Daisy UI
            </a>
          </li>
          <li>
            <a
              class="underline underline-offset-1"
              rel="noopener noreferrer"
              target="_blank"
              href="https://motion.vueuse.org"
              aria-label="Visit VueUse Motion website">
              VueUse Motion
            </a>
          </li>
          <li>
            <a
              class="underline underline-offset-1"
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.maptiler.com"
              aria-label="Visit MapTiler website">
              MapTiler
            </a>
          </li>
        </ul>
      </section>

    </main>

    <!-- Footer Component -->
    <Footer />
  </div>
</template>

<style scoped>
  /* Optional custom styles for the page */
</style>
