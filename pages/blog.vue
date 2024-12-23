<script setup>

</script>

<template>
  <div class="relative mx-auto max-w-xl min-h-screen flex flex-col px-4 text-sm">
    <!-- Main Content -->
    <main class="flex-grow">
      <!-- Navbar Component -->
      <Navbar />

      <section>
        <h1 class="text-2xl font-semibold">My Blog</h1>
        <ul class="mt-6">
          <li class="text-lg font-light">
            <NuxtLink to="/blogs/ticket-flow"
              class="hover:underline decoration-dotted">
              Ticket Flow
            </NuxtLink>
            <p class="font-light text-sm text-[#6c757d] mt-2">December 23, 2024</p>
          </li>
          <li class="text-lg font-light mt-5 text-[#6c757d]">
            Git Flow
            <p class="font-light text-sm text-[#6c757d] mt-2">Coming Soon...</p>
          </li>
          <li class="text-lg font-light mt-5 text-[#6c757d]">
            How To Install LAMP Stack on Ubuntu
            <p class="font-light text-sm text-[#6c757d] mt-2">Coming Soon...</p>
          </li>
          <li class="text-lg font-light mt-5 text-[#6c757d]">
            Creating Your First Laravel Package
            <p class="font-light text-sm text-[#6c757d] mt-2">Coming Soon...</p>
          </li>
          <li class="text-lg font-light mt-5 text-[#6c757d]">
            Laravel + Nuxt.js: A Powerful Combination
            <p class="font-light text-sm text-[#6c757d] mt-2">Coming Soon...</p>
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
