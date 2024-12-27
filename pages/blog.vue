<script setup>

</script>

<template>
  <div class="relative mx-auto max-w-xl min-h-screen flex flex-col px-4 text-sm">
    <!-- Main Content -->
    <main class="flex-grow">
      <!-- Navbar Component -->
      <Navbar />

      <section>
        <h1 class="text-2xl font-semibold"
          v-motion-slide-left
          :delay="50"
          :duration="500"
        >
          My Blog
        </h1>
        <ul class="space-y-6 mt-6">
          <li class="text-sm"
            v-motion-slide-left
            :delay="100"
            :duration="500">
            <NuxtLink to="/blogs/simplifying-ticket-flow"
              class="hover:underline decoration-dotted">
              Simplifying Ticket Flow for Efficient Project Development
            </NuxtLink>
            <p class="font-light text-sm text-[#747575] mt-1">December 23, 2024</p>
          </li>
          <li class="text-sm text-[#747575] cursor-not-allowed"
            v-motion-slide-left
            :delay="120"
            :duration="500">
            Essential Git Commands: Simplify Version Control
            <p class="font-light text-sm text-[#747575] mt-1">Coming Soon...</p>
          </li>
          <li class="text-sm text-[#747575] cursor-not-allowed"
            v-motion-slide-left
            :delay="130"
            :duration="500">
            Laravel, Domains, and Web Hosting: Everything You Need to Know
            <p class="font-light text-sm text-[#747575] mt-1">Coming Soon...</p>
          </li>
          <li class="text-sm text-[#747575] cursor-not-allowed"
            v-motion-slide-left
            :delay="140"
            :duration="500">
            Laravel, GitLab CI/CD, Docker
            <p class="font-light text-sm text-[#747575] mt-1">Coming Soon...</p>
          </li>
          <li class="text-sm text-[#747575] cursor-not-allowed"
            v-motion-slide-left
            :delay="150"
            :duration="500">
            Building Your First Laravel Package: A Step-by-Step Guide
            <p class="font-light text-sm text-[#747575] mt-1">Coming Soon...</p>
          </li>
          <li class="text-sm text-[#747575] cursor-not-allowed"
            v-motion-slide-left
            :delay="160"
            :duration="500">
            Laravel API Backend + Nuxt.js Frontend CRUD
            <p class="font-light text-sm text-[#747575] mt-1">Coming Soon...</p>
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
