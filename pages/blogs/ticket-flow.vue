<script setup>
  // Define the stages and their descriptions
  const stages = [
    {
      id: 'todo',
      title: 'TO DO: The Launchpad for Every Task',
      content: 'The TO DO stage is where everything starts. It’s the blueprint of your project, where you plan and prioritize tasks before diving into development. Without this crucial step, it would be easy to lose focus and miss key deliverables.'
    },
    {
      id: 'reopened',
      title: 'RE-OPENED: Revisiting Tasks for Perfection',
      content: 'Even the best-laid plans sometimes need revision. A task might be RE-OPENED when unforeseen issues arise, such as bugs, new feature requests, or client feedback. This phase ensures that all aspects of the task meet expectations before moving forward.'
    },
    {
      id: 'in-progress',
      title: 'IN PROGRESS: Bringing Ideas to Life',
      content: 'Once a task is picked up, it enters the IN PROGRESS stage. Here, development teams breathe life into the plan. It’s where the magic happens—coding, designing, and building the features that will shape the product.'
    },
    {
      id: 'awaiting-bundle',
      title: 'AWAITING BUNDLE: Preparing for Launch',
      content: 'After the development phase, tasks are often grouped into bundles. The AWAITING BUNDLE stage ensures that the release is streamlined. It’s like preparing for a product launch, where everything is packaged and ready for deployment in a smooth, coordinated release.'
    },
    {
      id: 'quality-assurance',
      title: 'QUALITY ASSURANCE: The Gatekeeper of Quality',
      content: 'No product release is complete without thorough testing. The QUALITY ASSURANCE phase is where features undergo rigorous testing to verify that they meet the specified requirements and perform as expected. It\'s crucial for identifying bugs or inconsistencies before going live.'
    },
    {
      id: 'uat',
      title: 'UAT (User Acceptance Testing): Client Feedback Drives Refinement',
      content: 'User Acceptance Testing (UAT) is where the real-world testing begins. Your end users or clients test the feature to ensure it aligns with their needs. The feedback gathered during this phase is invaluable in making final adjustments that will impact user satisfaction.'
    },
    {
      id: 'ready-for-release',
      title: 'READY FOR RELEASE: The Final Countdown',
      content: 'The READY FOR RELEASE stage means the task has passed all testing phases, adjustments have been made, and everything is now polished. At this point, it’s essentially "game time"—the feature is prepped for deployment and will soon be available to users.'
    },
    {
      id: 'released',
      title: 'RELEASED: Making an Impact',
      content: 'Once the feature is successfully deployed to production, it’s marked as RELEASED. This is the ultimate goal—your hard work is now live and accessible to end users. Celebrate, but also keep an eye out for user feedback to continue improving the product.'
    }
  ];
</script>

<template>
  <div class="relative mx-auto max-w-xl min-h-screen flex flex-col px-4 text-sm">
    <!-- Main Content -->
    <main class="flex-grow">
      <!-- Navbar Component -->
      <Navbar />

      <div class="breadcrumbs text-sm">
        <ul class="text-[#6c757d]">
          <li>
            <NuxtLink to="/blog"
              class="hover:underline decoration-dotted">
              Blog
            </NuxtLink>
          </li>
          <li>Ticket Flow</li>
        </ul>
      </div>

      <!-- Introduction -->
      <section class="mt-4">
        <h1 class="text-2xl font-semibold">Mastering Ticket Flow in Project Development: Boosting Efficiency and Transparency</h1>
        <p class="font-light text-sm text-[#6c757d] mt-2">December 23, 2024</p>

        <div class="card bg-base-100 w-100 mt-6">
          <a href="/_nuxt/assets/img/ticket-flow-diagram.png"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View source on GitHub">
            <figure>
            <img
                src="~/assets/img/ticket-flow-diagram.png"
                alt="Ticket Flow Diagram" />
            </figure>
          </a>
        </div>

        <p class="leading-6 mt-6">Effective project management begins with a structured ticket flow. This process helps keep development on track, reduces bottlenecks, and ensures your team delivers high-quality products on time.</p>
        <p class="leading-6 mt-4">In this post, we’ll walk you through each stage of the ticket flow and explain how to leverage it to optimize your development workflow.</p>
      </section>

      <!-- Table of Contents -->
      <section class="mt-6">
        <h2 class="text-lg font-semibold">Table of Contents</h2>
        <ul class="leading-6">
          <li
            v-for="(stage, index) in stages"
            :key="stage.id">
            <a :href="`#${stage.id}`">{{ index + 1 }}. {{ stage.title.split(":")[0] }}</a>
          </li>
        </ul>
      </section>

      <!-- Content -->
      <section
        v-for="(stage, index) in stages"
        :key="stage.id"
        class="mt-10"
        :id="stage.id">
        <h2 class="text-lg font-semibold">{{ index + 1 }}. {{ stage.title }}</h2>
        <p class="leading-6 mt-1">{{ stage.content }}</p>
      </section>

      <section class="mt-6">
        <h2 class="text-lg font-semibold">Conclusion</h2>
        <p class="leading-6">Mastering ticket flow isn’t just about moving tasks from one stage to the next. It’s about creating a system that enhances efficiency, fosters collaboration, and ensures transparency. With a solid ticket flow, your team will be better equipped to deliver high-quality software on time, while keeping everyone aligned with project goals.</p>
      </section>
    </main>

    <!-- Footer Component -->
    <Footer />
  </div>
</template>

<style scoped>
  /* Optional custom styles for the page */
</style>
