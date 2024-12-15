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
            <img src="~/assets/img/profile.jpg" />
						</div>
					</div>
				</div>
				<div class="flex flex-col justify-center">
					<h1 class="text-xl font-semibold">
						Richard Galolo
					</h1>
					<span class="text-sm text-slate-700 dark:text-gray-400">
            PHP/Laravel Developer
          </span>
				</div>
			</div>

      <!-- Bio -->
      <div class="mt-6 text-balance md:text-pretty">
				Web developer with 6 years of experience. I enjoy creating new and innovative web applications. I am seeking a challenging role that will allow me to continuously improve my skills and contribute to the success of the team.
			</div>

      <!-- Experiences -->
      <div class="mt-8">
        <div class="mb-2 font-semibold text-medium">Work Experience</div>
        <div class="flex flex-col gap-6">
          <div class="flex">
            <div class="mr-8 w-full max-w-[100px]">April 2020 - Present</div>
            <div class="flex flex-1 flex-col">
              <h4>Laravel Developer at Freelance</h4>
              <p>Remote</p>
              <ul class="list-inside text-gray-400 text-balance">
                  <li>
                    &#8226; Developed fully-functional web applications from scratch, beginning with the creation of database schema diagrams to guide the development process.
                  </li>
                  <li>
                    &#8226; Conducted comprehensive website testing and debugging to ensure optimal functionality across a range of browsers and devices.
                  </li>
                  <li>
                    &#8226; Collaborated closely with cross-functional teams to identify and prioritize website features and functionality based on business requirements and user needs.
                  </li>
                  <li>
                    &#8226; Maintained and updated existing websites with fresh content, new features, and enhanced functionality to improve user engagement.
                  </li>
                  <li>
                    &#8226; Integrating third-party applications and APIs into websites to enhance functionality.
                  </li>
                  <li>
                    &#8226; Utilized a range of APIs including Payment Gateways (Stripe, Paypal, Dragonpay), Cloud Storage (AWS S3, Azure Blob, Digital Ocean Spaces, Wazabi, BunnyCDN, Box), Mail/SMS Drivers (Sendgrid, Mailchimp, Twillio, Movider), Error Logging (Sentry, Rollbar, Papertrails, Slack), and CMS (Freshdesk).
                  </li>
                  <li>
                    &#8226; Utilized tools such as Bitbucket, Gitlab, Github, Codebase, JIRA, MS Teams, Slack, Sequel Pro, Postman, Forge, and Digital Ocean.
                  </li>
              </ul>
            </div>
          </div>
          <div class="flex">
            <div class="mr-8 w-full max-w-[100px]">December 2019 - April 2020</div>
            <div class="flex flex-1 flex-col">
              <h4>Laravel Developer at TBL Technerds</h4>
              <p>Remote</p>
              <ul class="list-inside text-gray-400 text-balance">
                  <li>
                    &#8226; Managed both backend and web administration for web and mobile applications, optimizing performance and scalability.
                  </li>
                  <li>
                    &#8226; Translated mockup designs into responsive HTML/CSS code, ensuring accuracy and attention to detail.
                  </li>
                  <li>
                    &#8226; Integrated Stripe and PayPal APIs for secure and reliable payment processing, improving user satisfaction and financial efficiency.
                  </li>
                  <li>
                    &#8226; Utilized tools such as Bitbucket, Cpanel, Trello, Slack, VSCode, and TimeDoctor.
                  </li>
              </ul>
            </div>
          </div>
          <div class="flex">
            <div class="mr-8 w-full max-w-[100px]">February 2019 - November 2019</div>
            <div class="flex flex-1 flex-col">
              <h4>Web Developer at D’Courtyard Technology Hub</h4>
              <p>Office</p>
              <ul class="list-inside text-gray-400 text-balance">
                <li>
                  &#8226; Developed and maintained the administrator side of a mobile application by implementing new features and ensuring optimal functionality.
                </li>
                <li>
                  &#8226; Collaborated with team members in weekly meetings to discuss project progress, identify challenges, and develop solutions.
                </li>
                <li>
                  &#8226; Utilized tools such as Bitbucket, JIRA, Sequel Pro, VSCode and Digital Ocean.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-8">
        <div class="mb-2 font-semibold text-medium">Education</div>
        <div class="flex flex-col gap-6">
          <div class="flex">
            <div class="mr-8 w-full max-w-[100px]">June 2015 - March 2019</div>
            <div class="flex flex-1 flex-col">
              <h4>Bachelor of Science in Information Technology</h4>
              <ul class="list-inside text-gray-400 text-balance">
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
      <div class="mt-8">
        <div class="mb-2 font-semibold text-medium">Contact</div>
        <div class="flex flex-col gap-6">
          <div class="flex">
            <div class="mr-8 w-full max-w-[100px]">Email</div>
            <div class="flex flex-1 flex-col">
              <a href="mailto:richardgalolo@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex text-gray-400 hover:underline">
                richardgalolo@gmail.com
                <svg width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.5 3C3.22386 3 3 3.22386 3 3.5C3 3.77614 3.22386 4 3.5 4V3ZM8.5 3.5H9C9 3.22386 8.77614 3 8.5 3V3.5ZM8 8.5C8 8.77614 8.22386 9 8.5 9C8.77614 9 9 8.77614 9 8.5H8ZM2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L2.64645 8.64645ZM3.5 4H8.5V3H3.5V4ZM8 3.5V8.5H9V3.5H8ZM8.14645 3.14645L2.64645 8.64645L3.35355 9.35355L8.85355 3.85355L8.14645 3.14645Z" class="fill-current text-slate-900 dark:text-slate-100"></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="flex">
            <div class="mr-8 w-full max-w-[100px]">LinkedIn</div>
            <div class="flex flex-1 flex-col">
              <a href="https://www.linkedin.com/in/richard-galolo-b7a4ab180/"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex text-gray-400 hover:underline">
                richard-galolo
                <svg width="12"
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