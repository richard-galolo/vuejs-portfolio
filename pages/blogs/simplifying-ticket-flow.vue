<script setup>
  useSeoMeta({
    title: 'Simplifying Ticket Flow for Efficient Project Development - Richard Galolo',
    ogTitle: 'Simplifying Ticket Flow for Efficient Project Development - Richard Galolo',
    description: 'Effective project management begins with a structured ticket flow. This process helps keep development on track, reduces bottlenecks, and ensures your team delivers high-quality products on time.',
    ogDescription: 'Effective project management begins with a structured ticket flow. This process helps keep development on track, reduces bottlenecks, and ensures your team delivers high-quality products on time.',
    ogImage: '/img/ticket-flow-diagram.png',
  });

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
    <main class="flex-grow">
      <Navbar />

      <!-- Breadcrumbs -->
      <div class="breadcrumbs text-sm">
        <ul class="text-[#6c757d]">
          <li>
            <NuxtLink to="/blog"
              class="hover:underline decoration-dotted">
              Blog
            </NuxtLink>
          </li>
          <li>Simplifying Ticket Flow</li>
        </ul>
      </div>

      <!-- Title -->
      <section class="mt-4">
        <h1 class="text-2xl font-semibold">Simplifying Ticket Flow for Efficient Project Development</h1>
        <div class="flex justify-between">
          <div class="font-light text-sm text-[#6c757d] mt-2">December 23, 2024</div>
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

        <!-- Image -->
        <div class="mt-6">
          <a
            href="/img/ticket-flow-diagram.png"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View image">
            <img
              src="/img/ticket-flow-diagram.png"
              lazy="loading"
              alt="Ticket Flow Diagram" />
          </a>
        </div>

        <h2 class="text-lg font-semibold mt-6">Introduction</h2>
        <p class="leading-6 mt-2">Effective project management begins with a structured ticket flow. This process helps keep development on track, reduces bottlenecks, and ensures your team delivers high-quality products on time.</p>

        <p class="leading-6 mt-2">In this post, we’ll walk you through each stage of the ticket flow and explain how to leverage it to optimize your development workflow.</p>
      </section>

      <h3 class="text-lg font-semibold mt-6">Stages of Ticket Flow</h3>

      <section>
        <ul>
          <li
            v-for="(stage, index) in stages"
            :key="stage.id"
            :class="index != 0 ? 'mt-6' : 'mt-4' "
            :id="stage.id">
            <p class="font-semibold">{{ index + 1 }}. {{ stage.title }}</p>
            <p class="leading-6 mt-1">{{ stage.content }}</p>
          </li>
        </ul>
      </section>

      <section class="mt-6">
        <h4 class="text-lg font-semibold">Conclusion</h4>
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
