<script setup>
  const hovering = ref(true);

  const skills = [
    {
      name: 'Laravel',
      path: '/svg/skills/laravel.svg'
    },
    {
      name: 'PHP',
      path: '/svg/skills/php.svg'
    },
    {
      name: 'HTML5',
      path: '/svg/skills/html5.svg'
    },
    {
      name: 'CSS',
      path: '/svg/skills/css.svg'
    },
    {
      name: 'GIT',
      path: '/svg/skills/git.svg'
    },
    {
      name: 'Node.js',
      path: '/svg/skills/nodejs.svg'
    },
    {
      name: 'MySQL',
      path: '/svg/skills/mysql.svg'
    },
    {
      name: 'MongoDB',
      path: '/svg/skills/mongodb.svg'
    },
  ];

  const recentProjects = [
    {
      name: 'Authentication API',
      description: 'Created a user authentication API package compatible with any Laravel project.',
      source: 'https://github.com/richard-galolo/laravel-auth-api',
      frameworks: [
        {
          name: 'laravel',
          path: '/svg/projects/laravel.svg'
        },
        {
          name: 'packagist',
          path: '/svg/projects/packagist.svg'
        },
      ]
    },
    {
      name: 'Stripe Payment',
      description: 'Created a user authentication API package compatible with any Laravel project.',
      source: 'https://github.com/richard-galolo/laravel-stripe',
      frameworks: [
        {
          name: 'laravel',
          path: '/svg/projects/laravel.svg'
        },
        {
          name: 'html5',
          path: '/svg/projects/html5.svg'
        },
        {
          name: 'stripe',
          path: '/svg/projects/stripe.svg'
        },
      ]
    },
    {
      name: 'Web Scraper',
      description: 'Built a web scraper in Node.js for extracting data from e-commerce websites.',
      source: 'https://github.com/richard-galolo/nodejs-web-scraper',
      frameworks: [
        {
          name: 'nodejs',
          path: '/svg/projects/nodejs.svg'
        },
        {
          name: 'cheerio',
          path: '/svg/projects/cheerio.svg'
        },
      ]
    },
    {
      name: 'Chrome Extension Scraper',
      description: 'Developed a simple chrome extension for scraping e-commerce websites.',
      source: 'https://github.com/richard-galolo/chrome-extension-web-scraper',
      frameworks: [
        {
          name: 'google',
          path: '/svg/projects/google.svg'
        },
      ]
    },
  ];
</script>

<template>
  <div class="relative mx-auto max-w-xl min-h-screen flex flex-col px-4">
    <!-- Main Content -->
    <main class="flex-grow">
      <Navbar />
      <Map />

      <!-- Introduction -->
			<section
        v-motion="{
          initial: {
            y: 100,
            opacity: 0
          },
          enter: {
            y: 0,
            opacity: 1,
            transition: {
              delay: 100,
              duration: 500,
            }
          }
        }"
      >
				<div class="flex gap-5">
          <div class="avatar ml-1">
            <div class="ring-[#121212] dark:ring-white ring-offset-base-100 w-16 rounded-full ring ring-offset-2">
              <img
                width="64"
                height="64"
                src="~/assets/img/profile.webp"
                alt="profile image"/>
            </div>
          </div>
          <div class="flex flex-col justify-center">
            <h1 class="text-xl font-semibold">
              Hi, I'm Richard<span class="ml-1 inline-block origin-bottom-right hover:animate-waving-hand cursor-default">👋</span>
            </h1>
            <a
              href="mailto:richardgalolo@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex text-[#6c757d] hover:underline decoration-dotted"
              @mouseover="hovering = false"
              @mouseout="hovering = true"
            >
              <div
                class="flex gap-1 text-sm text-[#6c757d]">
                <!-- Dynamic SVG -->
                <svg
                  v-if="hovering"
                  class="fill-[#22c55e]"
                  width="8"
                  viewBox="0 0 6 6"
                  aria-hidden="true">
                  <circle r="3" cx="3" cy="3"></circle>
                </svg>
                <svg
                  v-else
                  class="fill-[#0d82d8]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  viewBox="0 0 512 512">
                  <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                </svg>
                <span>{{ hovering ? "Available for work" : "Hire Me" }}</span>
              </div>
            </a>
          </div>
        </div>

        <!-- Bio -->
        <h2 class="text-sm mt-4">I'm a PHP Laravel Developer with six years of experience, specializing in backend development.</h2>
			</section>

      <!-- Skills -->
      <section
        class="mt-6"
        v-motion="{
          initial: {
            y: 100,
            opacity: 0
          },
          enter: {
            y: 0,
            opacity: 1,
            transition: {
              delay: 200,
              duration: 500,
            }
          }
        }"
      >
				<p class="mb-2 font-semibold text-sm">Skills</p>
				<div class="grid grid-cols-2 gap-4">
					<div
            class="h-full w-auto border border-slate-300 dark:border-[#6c757d] rounded-lg p-3 flex flex-row space-x-4"
            v-for="skill in skills"
          >
            <div class="h-full w-auto aspect-square rounded-lg flex items-center justify-center">
              <img
                class="dark:brightness-1 dark:invert"
                :src="skill.path"
                :alt="skill.name"
                width="24"
                loading="lazy"/>
            </div>
            <div class="flex flex-col items-left justify-center">
              <p class="text-sm md:text-md">{{ skill.name }}</p>
            </div>
          </div>
				</div>
			</section>

      <!-- Recent Projects -->
      <section
        class="mt-6"
        v-motion="{
          initial: {
            y: 100,
            opacity: 0
          },
          enter: {
            y: 0,
            opacity: 1,
            transition: {
              delay: 300,
              duration: 500,
            }
          }
        }"
      >
				<p class="mb-2 font-semibold text-sm">Recent Projects</p>
        <div class="grid grid-cols-2 gap-4">
          <div
            class="card border border-slate-300 dark:border-[#6c757d] rounded-lg"
            v-for="project in recentProjects"
          >
            <figure class="p-4"
              style="display: none;">
              <img
                width="240"
                height="240"
                src="@/assets/svg/empty.svg"
                alt="empty image"
                class="rounded-lg w-full h-auto"
                loading="lazy" />
            </figure>
            <div class="card-body p-4">
              <h3 class="text-sm font-medium">{{ project.name }}</h3>
              <p class="text-sm text-[#6c757d] mb-2">{{ project.description }}</p>
              <div
                class="flex gap-2 mb-2"
              >
                <img
                  v-for="framework in project.frameworks"
                  :src="framework.path"
                  :alt="framework.name"
                  width="18"
                  height="18"
                  loading="lazy"/>
              </div>
              <div class="card-actions">
                <a :href="project.source"
                  target="_blank"
                  rel="noopener noreferrer"
                  type="button"
                  class="inline-flex items-center justify-center rounded-lg font-medium text-sm border dark:border-[#6c757d] h-10 px-4 py-2"
                  aria-label="View source on GitHub">
                  <img
                    class="dark:brightness-0 dark:invert"
                    src="/svg/projects/github.svg"
                    alt="github"
                    width="16"
                    height="16"
                    loading="lazy"/>
                  <span class="ml-2 hidden sm:block">Source</span>
                </a>
              </div>
            </div>
          </div>
				</div>
			</section>

      <!-- Hire Me -->
      <section
        class="mt-6 bg-amber-100 dark:bg-black p-5 rounded-lg"
        v-motion="{
          initial: {
            y: 100,
            opacity: 0
          },
          enter: {
            y: 0,
            opacity: 1,
            transition: {
              delay: 300,
              duration: 500,
            }
          }
        }"
      >
        <p class="mb-2 font-semibold text-sm">Hire Me!</p>
        <p class="text-sm font-light">
          I’m available for exciting opportunities in backend development and web applications. Let’s collaborate to create impactful solutions!
        </p>
        <div class="flex mt-4 gap-3">
          <a href="mailto:richardgalolo@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center rounded-lg font-medium text-sm border border-black dark:border-[#6c757d] h-10 px-4 py-2"
            aria-label="Send an email to Richard Galolo">
              <img
                class="dark:brightness-0 dark:invert size-4"
                src="/svg/general/email.svg"
                alt="email icon"
                width="16"
                loading="lazy"/>
              <span class="ml-2 hidden sm:block ">Email</span>
          </a>
          <a href="https://www.linkedin.com/in/richard-galolo-b7a4ab180/"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center rounded-lg font-medium text-sm border border-black dark:border-[#6c757d] h-10 px-4 py-2"
            aria-label="Visit Richard Galolo's LinkedIn profile">
              <img
                class="dark:brightness-0 dark:invert size-4"
                src="/svg/general/linkedIn.svg"
                alt="linkedIn icon"
                width="16"
                loading="lazy"/>
              <span class="ml-2 hidden sm:block">LinkedIn</span>
          </a>
          <a href="https://www.upwork.com/freelancers/~01572f9aec60afec03"
            target="_blank"
            class="inline-flex items-center justify-center rounded-lg font-medium text-sm border border-black dark:border-[#6c757d] h-10 px-4 py-2"
            rel="noopener noreferrer"
            aria-label="Visit Richard Galolo's Upwork profile">
              <img
                class="dark:brightness-0 dark:invert size-4"
                src="/svg/general/upwork.svg"
                alt="upwork icon"
                width="16"
                loading="lazy"/>
              <span class="ml-2 hidden sm:block">Upwork</span>
          </a>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>