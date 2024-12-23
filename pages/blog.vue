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
        <ul class="space-y-6 mt-6">
          <li class="text-sm">
            <NuxtLink to="/blogs/simplifying-ticket-flow"
              class="hover:underline decoration-dotted">
              Simplifying Ticket Flow for Efficient Project Development
            </NuxtLink>
            <p class="font-light text-sm text-[#6c757d] mt-1">December 23, 2024</p>
          </li>
          <li class="text-sm text-[#6c757d] cursor-not-allowed">
            Essential Git Commands: Simplify Version Control
            <p class="font-light text-sm text-[#6c757d] mt-1">Coming Soon...</p>
          </li>
          <li class="text-sm text-[#6c757d] cursor-not-allowed">
            Building Your First Laravel Package: A Step-by-Step Guide
            <p class="font-light text-sm text-[#6c757d] mt-1">Coming Soon...</p>
          </li>
          <li class="text-sm text-[#6c757d] cursor-not-allowed">
            Laravel, Domains, and Web Hosting: Everything You Need to Know
            <p class="font-light text-sm text-[#6c757d] mt-1">Coming Soon...</p>
          </li>
          <li class="text-sm text-[#6c757d] cursor-not-allowed">
            Laravel, GitLab CI/CD, Docker
            <p class="font-light text-sm text-[#6c757d] mt-1">Coming Soon...</p>
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
