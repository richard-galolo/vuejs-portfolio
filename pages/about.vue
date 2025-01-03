<script setup>
  const jobs = [
    {
      id: 1,
      date: '2021 - Present',
      position: 'Web Developer',
      company: 'Freelance',
      location: 'Remote',
      tasks: [
        'Developed fully-functional web applications from scratch, beginning with the creation of database schema diagrams to guide the development process.',
        'Conducted comprehensive website testing and debugging to ensure optimal functionality across a range of browsers and devices.',
        'Collaborated closely with cross-functional teams to identify and prioritize website features and functionality based on business requirements and user needs.',
        'Maintained and updated existing websites with fresh content, new features, and enhanced functionality to improve user engagement.',
        'Integrated third-party applications and APIs into websites to enhance functionality.',
        'Utilized a range of APIs including Payment Gateways (Stripe, Paypal, Dragonpay), Cloud Storage (AWS S3, Azure Blob, Digital Ocean Spaces, Wazabi, BunnyCDN, Box), Mail/SMS Drivers (Sendgrid, Mailchimp, Twillio, Movider), Error Logging (Sentry, Rollbar, Papertrails, Slack), and CMS (Freshdesk).',
        'Utilized tools such as Bitbucket, Gitlab, Github, Codebase, JIRA, MS Teams, Slack, Sequel Pro, Postman, Forge, and Digital Ocean.',
      ],
    },
    {
      id: 2,
      date: '2020 - 2021',
      position: 'Laravel Developer',
      company: 'TBL Technerds',
      location: 'Remote',
      tasks: [
        'Managed both backend and web administration for web and mobile applications, optimizing performance and scalability.',
        'Translated mockup designs into responsive HTML/CSS code, ensuring accuracy and attention to detail.',
        'Integrated Stripe and PayPal APIs for secure and reliable payment processing, improving user satisfaction and financial efficiency.',
        'Utilized tools such as Bitbucket, Cpanel, Trello, Slack, VSCode, and TimeDoctor.',
      ],
    },
    {
      id: 3,
      date: '2019 - 2020',
      position: 'Web Developer',
      company: 'D’Courtyard Technology Hub',
      location: 'Office',
      tasks: [
        'Developed and maintained the administrator side of a mobile application by implementing new features and ensuring optimal functionality.',
        'Collaborated with team members in weekly meetings to discuss project progress, identify challenges, and develop solutions.',
        'Utilized tools such as Bitbucket, JIRA, Sequel Pro, VSCode, and Digital Ocean.',
      ],
    },
  ];
</script>

<template>
  <div class="relative mx-auto max-w-xl min-h-screen flex flex-col px-4">
    <!-- Main Content -->
    <main class="flex-grow">
      <Navbar />

      <!-- Introduction -->
			<div class="flex gap-5 mt-6">
				<div>
					<div class="avatar">
						<div class="ring-[#121212] dark:ring-white ring-offset-base-100 w-16 rounded-full ring ring-offset-2">
            <img
              width="64"
              height="64"
              src="~/assets/img/profile.webp"
              alt="profile image"/>
						</div>
					</div>
				</div>
				<div class="flex flex-col justify-center">
					<h1 class="text-xl font-semibold">
						Richard Galolo
					</h1>
					<p class="text-sm text-[#747575]">
            PHP Laravel Developer
          </p>
				</div>
			</div>

      <!-- Bio -->
      <div class="mt-6">
        <p class="mb-2 font-semibold text-sm">About</p>
				<p class="text-sm text-balance leading-6">
          Web developer with six years of experience. I enjoy creating new and innovative web applications. I am seeking a challenging role that will allow me to continuously improve my skills and contribute to the success of the team.
        </p>
			</div>

      <!-- Experiences -->
      <div class="mt-6">
        <p class="mb-2 font-semibold text-sm">Work Experience</p>
        <div class="flex flex-col gap-6">
          <div v-for="job in jobs"
            :key="job.id"
            class="flex">
            <div class="mr-6 w-full max-w-[100px] text-sm">{{ job.date }}</div>
            <div class="flex flex-1 flex-col text-sm">
              <p>{{ job.position }} at {{ job.company }}</p>
              <p>{{ job.location }}</p>
              <ul class="list-inside text-[#747575] text-balance leading-6">
                <li v-for="(task, index) in job.tasks"
                  :key="index"
                  class="flex gap-1 mt-2">
                  <span>&#8226;</span>
                  <p class="text-pretty">
                    {{ task }}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Education -->
      <div class="mt-6">
        <div class="mb-2 font-semibold text-sm">Education</div>
        <div class="flex flex-col gap-6">
          <div class="flex">
            <div class="mr-6 w-full max-w-[100px] text-sm">2015 - 2019</div>
            <div class="flex flex-1 flex-col text-sm leading-6">
              <p>Bachelor of Science in Information Technology</p>
              <ul class="list-inside text-[#747575] text-balance">
                <li>
                  AMA Computer Learning Center
                </li>
                <li>
                  122-2 Gallaries Street, Tagbilaran City, Bohol
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact -->
      <div class="mt-6">
        <div class="mb-2 font-semibold text-sm">Contact</div>
        <div class="flex flex-col gap-6">
          <div class="flex text-sm">
            <div class="mr-6 w-full max-w-[100px]">Email</div>
            <div class="flex flex-1 flex-col">
              <a href="mailto:richardgalolo@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex text-[#747575] hover:underline decoration-dotted">
                richardgalolo@gmail.com
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.5 3C3.22386 3 3 3.22386 3 3.5C3 3.77614 3.22386 4 3.5 4V3ZM8.5 3.5H9C9 3.22386 8.77614 3 8.5 3V3.5ZM8 8.5C8 8.77614 8.22386 9 8.5 9C8.77614 9 9 8.77614 9 8.5H8ZM2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L2.64645 8.64645ZM3.5 4H8.5V3H3.5V4ZM8 3.5V8.5H9V3.5H8ZM8.14645 3.14645L2.64645 8.64645L3.35355 9.35355L8.85355 3.85355L8.14645 3.14645Z" class="fill-current text-slate-900 dark:text-slate-100"></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="flex text-sm">
            <div class="mr-6 w-full max-w-[100px]">LinkedIn</div>
            <div class="flex flex-1 flex-col">
              <a href="https://www.linkedin.com/in/richard-galolo-b7a4ab180/"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex text-[#747575] hover:underline decoration-dotted">
                richard-galolo
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.5 3C3.22386 3 3 3.22386 3 3.5C3 3.77614 3.22386 4 3.5 4V3ZM8.5 3.5H9C9 3.22386 8.77614 3 8.5 3V3.5ZM8 8.5C8 8.77614 8.22386 9 8.5 9C8.77614 9 9 8.77614 9 8.5H8ZM2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L2.64645 8.64645ZM3.5 4H8.5V3H3.5V4ZM8 3.5V8.5H9V3.5H8ZM8.14645 3.14645L2.64645 8.64645L3.35355 9.35355L8.85355 3.85355L8.14645 3.14645Z" class="fill-current text-slate-900 dark:text-slate-100"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>