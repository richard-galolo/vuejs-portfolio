<script setup>
import { ref, watch, onMounted } from 'vue';

// Reactive state for dark mode
const isDarkMode = ref(false);

// Function to update the theme on <html> and localStorage
const updateTheme = (value) => {
  const theme = value ? 'dark' : 'light';
  document.querySelector('html').setAttribute('data-theme', theme);
  localStorage.setItem('darkMode', JSON.stringify(value));
};

// Watch for changes in `isDarkMode` and update the theme
watch(isDarkMode, updateTheme);

// Set initial dark mode state on mount
onMounted(() => {
  const storedDarkMode = JSON.parse(localStorage.getItem('darkMode'));
  isDarkMode.value = storedDarkMode ?? false;
  updateTheme(isDarkMode.value);
});

// SEO Meta data
useSeoMeta({
  title: 'Richard Galolo',
  ogTitle: 'Richard Galolo',
  description: 'This is my portfolio, let me tell you all about it.',
  ogDescription: 'This is my portfolio, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
});
</script>

<template>
  <div class="grid grid-cols-12 sm:grid-cols-1 md:grid-cols-12 px-4 min-h-screen">
		<div class="col-start-1 col-span-12 sm:col-start-1 sm:col-span-12 md:col-start-5 md:col-span-4">
			<div class="navbar px-0">
				<div class="flex-1">
					<a class="text-xl font-semibold">RG</a>
				</div>
				<div class="flex-none">
					<div class="navbar-center">
						<ul class="menu menu-horizontal">
							<li>
								<a>Home</a>
							</li>
							<li>
								<a>Skills</a>
							</li>
							<li>
								<a>Projects</a>
							</li>
							<li>
								<a>
									<label class="swap swap-rotate">
										<!-- this hidden checkbox controls the state -->
										<input type="checkbox"
											class="theme-controller"
											value="dark"
											v-model="isDarkMode" />
										<!-- sun icon -->
										<svg
											class="swap-off h-5 w-5 fill-current"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24">
											<path
											d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
										</svg>
										<!-- moon icon -->
										<svg
											class="swap-on h-5 w-5 fill-current"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24">
											<path
											d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
										</svg>
									</label>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<!-- Introduction -->
			<div class="flex gap-4 mt-5">
				<div>
					<div class="avatar">
						<div class="ring-white ring-offset-base-100 w-16 rounded-full ring ring-offset-2">
							<img src="~/assets/img/profile.jpg" />
						</div>
					</div>
				</div>
				<div class="flex flex-col justify-center">
					<h1 class="text-2xl font-semibold">
						Hi, I'm Richard <span class="ml-1 inline-block origin-bottom-right hover:animate-wave">👋</span>
					</h1>
					<span class="text-sm">PHP/Laravel Developer</span>
				</div>
			</div>

			<div class="my-6">
				I'm a PHP Laravel developer with six years of experience, passionate about creating innovative and dynamic web applications.
			</div>

			<!-- Skills -->
			<div class="mt-8">
				<div class="mb-2 font-semibold text-medium">Skills</div>
				<div class="grid grid-cols-2 md:grid-cols-2 gap-4">
					<a data-state="closed">
						<div class="h-full w-auto bg-base-300 hover:bg-custom-gray-dark-5 border border-transparent hover:border-custom-gray-dark-3 rounded-xl p-3 flex flex-row space-x-4 transition-colors duration-150" style="transform: none;">
							<div class="h-full w-auto aspect-square rounded-lg bg-custom-gray-dark-4 flex items-center justify-center group">
								<svg class="fill-black stroke-black dark:fill-white dark:stroke-white"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 512 512">
									<path d="M107.2 0c2.5 0 4.7 .8 6.7 2l94.3 54.1c2.7 1.5 4.5 3.5 5.4 5.9c.9 2.2 .9 4.3 .9 5.6l0 193.4 69.2-39.7 0-100.3c0-2.6 .6-5 2.2-7.2c1.5-2.1 3.5-3.6 5.7-4.8c0 0 0 0 0 0l94-54c1.6-.9 3.4-1.6 5.5-1.6s4 .7 5.6 1.6l95.8 55.1c2.3 1.3 3.9 3 4.9 5.3c.9 2.1 .9 4.2 .9 5.8l0 107.2c0 2-.2 4.3-1.4 6.4c-1.2 2.2-3 3.7-5.1 4.9l-.1 .1-88 50.5 0 100c0 2.3-.3 4.8-1.6 7c-1.3 2.2-3.3 3.7-5.3 4.9c0 0 0 0-.1 0L208.7 510c-2.2 1.2-4.5 2-7.1 2s-4.9-.9-7.1-2l-.1-.1L7.1 402l-.5-.3c-1.1-.7-2.6-1.7-3.8-2.9C.9 396.9 0 394.6 0 391.6L0 65.9c0-4.8 3-7.9 5.5-9.3L100.5 2c2-1.2 4.3-2 6.8-2zM38.1 67.1l69 39.9 69.2-39.9L107.1 27.4l-69 39.7zm353 93.2l69-39.7-69-39.7-69.1 39.7 69.1 39.7zM189.2 89L120 128.8l0 186.4 69.2-39.9 0-186.4zM94.5 128.9L25.2 89.1l0 294.2 164 94.2 0-79.4-87.3-49.3-.2-.1c-1.3-.8-3.2-1.9-4.6-3.7c-1.7-2.1-2.5-4.7-2.5-7.7l0-208.5zm214.7 92.4l69.3 39.6 0-78.5-69.3-39.9 0 78.8zm94.5 39.6L473 221.2l0-78.8-69.3 39.9 0 78.5zM201.6 376.1l163.8-93.2-69-39.9L133 337.1l68.6 38.9zm12.9 101.5l164-94.2 0-78.8-164 93.6 0 79.4z"/>
								</svg>
							</div>
							<div class="flex flex-col items-left justify-center">
								<p class="text-sm md:text-md">Laravel</p>
							</div>
						</div>
					</a>
					<a data-state="closed">
						<div class="h-full w-auto bg-base-300 hover:bg-custom-gray-dark-5 border border-transparent hover:border-custom-gray-dark-3 rounded-xl p-3 flex flex-row space-x-4 transition-colors duration-150" style="transform: none;">
							<div class="h-full w-auto aspect-square rounded-lg bg-custom-gray-dark-4 flex items-center justify-center group">
								<svg class="fill-black stroke-black dark:fill-white dark:stroke-white"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 640 512">
									<path d="M320 104.5c171.4 0 303.2 72.2 303.2 151.5S491.3 407.5 320 407.5c-171.4 0-303.2-72.2-303.2-151.5S148.7 104.5 320 104.5m0-16.8C143.3 87.7 0 163 0 256s143.3 168.3 320 168.3S640 349 640 256 496.7 87.7 320 87.7zM218.2 242.5c-7.9 40.5-35.8 36.3-70.1 36.3l13.7-70.6c38 0 63.8-4.1 56.4 34.3zM97.4 350.3h36.7l8.7-44.8c41.1 0 66.6 3 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7h-70.7L97.4 350.3zm185.7-213.6h36.5l-8.7 44.8c31.5 0 60.7-2.3 74.8 10.7 14.8 13.6 7.7 31-8.3 113.1h-37c15.4-79.4 18.3-86 12.7-92-5.4-5.8-17.7-4.6-47.4-4.6l-18.8 96.6h-36.5l32.7-168.6zM505 242.5c-8 41.1-36.7 36.3-70.1 36.3l13.7-70.6c38.2 0 63.8-4.1 56.4 34.3zM384.2 350.3H421l8.7-44.8c43.2 0 67.1 2.5 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7H417l-32.8 168.7z"/>
								</svg>
							</div>
							<div class="flex flex-col items-left justify-center">
								<p class="text-sm md:text-md">PHP</p>
							</div>
						</div>
					</a>
					<a data-state="closed">
						<div class="h-full w-auto bg-base-300 hover:bg-custom-gray-dark-5 border border-transparent hover:border-custom-gray-dark-3 rounded-xl p-3 flex flex-row space-x-4 transition-colors duration-150" style="transform: none;">
							<div class="h-full w-auto aspect-square rounded-lg bg-custom-gray-dark-4 flex items-center justify-center group">
								<svg class="fill-black stroke-black dark:fill-white dark:stroke-white"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 384 512">
									<path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/>
								</svg>
							</div>
							<div class="flex flex-col items-left justify-center">
								<p class="text-sm md:text-md">HTML5</p>
							</div>
						</div>
					</a>
					<a data-state="closed">
						<div class="h-full w-auto bg-base-300 hover:bg-custom-gray-dark-5 border border-transparent hover:border-custom-gray-dark-3 rounded-xl p-3 flex flex-row space-x-4 transition-colors duration-150" style="transform: none;">
							<div class="h-full w-auto aspect-square rounded-lg bg-custom-gray-dark-4 flex items-center justify-center group">
								<svg class="fill-black stroke-black dark:fill-white dark:stroke-white"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 384 512">
									<path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3 .1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2 .1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"/>
								</svg>
							</div>
							<div class="flex flex-col items-left justify-center">
								<p class="text-sm md:text-md">CSS</p>
							</div>
						</div>
					</a>
					<a data-state="closed">
						<div class="h-full w-auto bg-base-300 hover:bg-custom-gray-dark-5 border border-transparent hover:border-custom-gray-dark-3 rounded-xl p-3 flex flex-row space-x-4 transition-colors duration-150" style="transform: none;">
							<div class="h-full w-auto aspect-square rounded-lg bg-custom-gray-dark-4 flex items-center justify-center group">
								<svg class="fill-black stroke-black dark:fill-white dark:stroke-white"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 448 512">
									<path d="M439.6 236.1L244 40.5a28.9 28.9 0 0 0 -40.8 0l-40.7 40.6 51.5 51.5c27.1-9.1 52.7 16.8 43.4 43.7l49.7 49.7c34.2-11.8 61.2 31 35.5 56.7-26.5 26.5-70.2-2.9-56-37.3L240.2 199v121.9c25.3 12.5 22.3 41.9 9.1 55a34.3 34.3 0 0 1 -48.6 0c-17.6-17.6-11.1-46.9 11.3-56v-123c-20.8-8.5-24.6-30.7-18.6-45L142.6 101 8.5 235.1a28.9 28.9 0 0 0 0 40.8l195.6 195.6a28.9 28.9 0 0 0 40.8 0l194.7-194.7a28.9 28.9 0 0 0 0-40.8z"/>
								</svg>
							</div>
							<div class="flex flex-col items-left justify-center">
								<p class="text-sm md:text-md">GIT</p>
							</div>
						</div>
					</a>
					<a data-state="closed">
						<div class="h-full w-auto bg-base-300 hover:bg-custom-gray-dark-5 border border-transparent hover:border-custom-gray-dark-3 rounded-xl p-3 flex flex-row space-x-4 transition-colors duration-150" style="transform: none;">
							<div class="h-full w-auto aspect-square rounded-lg bg-custom-gray-dark-4 flex items-center justify-center group">
								<svg class="fill-black stroke-black dark:fill-white dark:stroke-white"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 448 512">
									<path d="M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6 .4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2 .7 376.3 .7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8 .5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z"/>
								</svg>
							</div>
							<div class="flex flex-col items-left justify-center">
								<p class="text-sm md:text-md">Node.js</p>
							</div>
						</div>
					</a>
					<a data-state="closed">
						<div class="h-full w-auto bg-base-300 hover:bg-custom-gray-dark-5 border border-transparent hover:border-custom-gray-dark-3 rounded-xl p-3 flex flex-row space-x-4 transition-colors duration-150" style="transform: none;">
							<div class="h-full w-auto aspect-square rounded-lg bg-custom-gray-dark-4 flex items-center justify-center group">
								<svg class="fill-black stroke-black dark:fill-white dark:stroke-white"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="m24.129 23.412-.508-.484c-.251-.331-.518-.624-.809-.891l-.005-.004q-.448-.407-.931-.774-.387-.266-1.064-.641c-.371-.167-.661-.46-.818-.824l-.004-.01-.048-.024c.212-.021.406-.06.592-.115l-.023.006.57-.157c.236-.074.509-.122.792-.133h.006c.298-.012.579-.06.847-.139l-.025.006q.194-.048.399-.109t.351-.109v-.169q-.145-.217-.351-.496c-.131-.178-.278-.333-.443-.468l-.005-.004q-.629-.556-1.303-1.076c-.396-.309-.845-.624-1.311-.916l-.068-.04c-.246-.162-.528-.312-.825-.435l-.034-.012q-.448-.182-.883-.399c-.097-.048-.21-.09-.327-.119l-.011-.002c-.117-.024-.217-.084-.29-.169l-.001-.001c-.138-.182-.259-.389-.355-.609l-.008-.02q-.145-.339-.314-.651-.363-.702-.702-1.427t-.651-1.452q-.217-.484-.399-.967c-.134-.354-.285-.657-.461-.942l.013.023c-.432-.736-.863-1.364-1.331-1.961l.028.038c-.463-.584-.943-1.106-1.459-1.59l-.008-.007c-.509-.478-1.057-.934-1.632-1.356l-.049-.035q-.896-.651-1.96-1.282c-.285-.168-.616-.305-.965-.393l-.026-.006-1.113-.278-.629-.048q-.314-.024-.629-.024c-.148-.078-.275-.171-.387-.279-.11-.105-.229-.204-.353-.295l-.01-.007c-.605-.353-1.308-.676-2.043-.93l-.085-.026c-.193-.113-.425-.179-.672-.179-.176 0-.345.034-.499.095l.009-.003c-.38.151-.67.458-.795.84l-.003.01c-.073.172-.115.371-.115.581 0 .368.13.705.347.968l-.002-.003q.544.725.834 1.14.217.291.448.605c.141.188.266.403.367.63l.008.021c.056.119.105.261.141.407l.003.016q.048.206.121.448.217.556.411 1.14c.141.425.297.785.478 1.128l-.019-.04q.145.266.291.52t.314.496c.065.098.147.179.241.242l.003.002c.099.072.164.185.169.313v.001c-.114.168-.191.369-.217.586l-.001.006c-.035.253-.085.478-.153.695l.008-.03c-.223.666-.351 1.434-.351 2.231 0 .258.013.512.04.763l-.003-.031c.06.958.349 1.838.812 2.6l-.014-.025c.197.295.408.552.641.787.168.188.412.306.684.306.152 0 .296-.037.422-.103l-.005.002c.35-.126.599-.446.617-.827v-.002c.048-.474.12-.898.219-1.312l-.013.067c.024-.063.038-.135.038-.211 0-.015-.001-.03-.002-.045v.002q-.012-.109.133-.206v.048q.145.339.302.677t.326.677c.295.449.608.841.952 1.202l-.003-.003c.345.372.721.706 1.127 1.001l.022.015c.212.162.398.337.566.528l.004.004c.158.186.347.339.56.454l.01.005v-.024h.048c-.039-.087-.102-.157-.18-.205l-.002-.001c-.079-.044-.147-.088-.211-.136l.005.003q-.217-.217-.448-.484t-.423-.508q-.508-.702-.969-1.467t-.871-1.555q-.194-.387-.375-.798t-.351-.798c-.049-.099-.083-.213-.096-.334v-.005c-.006-.115-.072-.214-.168-.265l-.002-.001c-.121.206-.255.384-.408.545l.001-.001c-.159.167-.289.364-.382.58l-.005.013c-.141.342-.244.739-.289 1.154l-.002.019q-.072.641-.145 1.318l-.048.024-.024.024c-.26-.053-.474-.219-.59-.443l-.002-.005q-.182-.351-.326-.69c-.248-.637-.402-1.374-.423-2.144v-.009c-.009-.122-.013-.265-.013-.408 0-.666.105-1.308.299-1.91l-.012.044q.072-.266.314-.896t.097-.871c-.05-.165-.143-.304-.265-.41l-.001-.001c-.122-.106-.233-.217-.335-.335l-.003-.004q-.169-.244-.326-.52t-.278-.544c-.165-.382-.334-.861-.474-1.353l-.022-.089c-.159-.565-.336-1.043-.546-1.503l.026.064c-.111-.252-.24-.47-.39-.669l.006.008q-.244-.326-.436-.617-.244-.314-.484-.605c-.163-.197-.308-.419-.426-.657l-.009-.02c-.048-.097-.09-.21-.119-.327l-.002-.011c-.011-.035-.017-.076-.017-.117 0-.082.024-.159.066-.223l-.001.002c.011-.056.037-.105.073-.145.039-.035.089-.061.143-.072h.002c.085-.055.188-.088.3-.088.084 0 .165.019.236.053l-.003-.001c.219.062.396.124.569.195l-.036-.013q.459.194.847.375c.298.142.552.292.792.459l-.018-.012q.194.121.387.266t.411.291h.339q.387 0 .822.037c.293.023.564.078.822.164l-.024-.007c.481.143.894.312 1.286.515l-.041-.019q.593.302 1.125.641c.589.367 1.098.743 1.577 1.154l-.017-.014c.5.428.954.867 1.38 1.331l.01.012c.416.454.813.947 1.176 1.464l.031.047c.334.472.671 1.018.974 1.584l.042.085c.081.154.163.343.234.536l.011.033q.097.278.217.57.266.605.57 1.221t.57 1.198l.532 1.161c.187.406.396.756.639 1.079l-.011-.015c.203.217.474.369.778.422l.008.001c.368.092.678.196.978.319l-.047-.017c.143.065.327.134.516.195l.04.011c.212.065.396.151.565.259l-.009-.005c.327.183.604.363.868.559l-.021-.015q.411.302.822.57.194.145.651.423t.484.52c-.114-.004-.249-.007-.384-.007-.492 0-.976.032-1.45.094l.056-.006c-.536.072-1.022.203-1.479.39l.04-.014c-.113.049-.248.094-.388.129l-.019.004c-.142.021-.252.135-.266.277v.001c.061.076.11.164.143.26l.002.006c.034.102.075.19.125.272l-.003-.006c.119.211.247.393.391.561l-.004-.005c.141.174.3.325.476.454l.007.005q.244.194.508.399c.161.126.343.25.532.362l.024.013c.284.174.614.34.958.479l.046.016c.374.15.695.324.993.531l-.016-.011q.291.169.58.375t.556.399c.073.072.137.152.191.239l.003.005c.091.104.217.175.36.193h.003v-.048c-.088-.067-.153-.16-.184-.267l-.001-.004c-.025-.102-.062-.191-.112-.273l.002.004zm-18.576-19.205q-.194 0-.363.012c-.115.008-.222.029-.323.063l.009-.003v.024h.048q.097.145.244.326t.266.351l.387.798.048-.024c.113-.082.2-.192.252-.321l.002-.005c.052-.139.082-.301.082-.469 0-.018 0-.036-.001-.054v.003c-.045-.044-.082-.096-.108-.154l-.001-.003-.081-.182c-.053-.084-.127-.15-.214-.192l-.003-.001c-.094-.045-.174-.102-.244-.169z"></path></g></svg>
							</div>
							<div class="flex flex-col items-left justify-center">
								<p class="text-sm md:text-md">MySQL</p>
							</div>
						</div>
					</a>
					<a data-state="closed">
						<div class="h-full w-auto bg-base-300 hover:bg-custom-gray-dark-5 border border-transparent hover:border-custom-gray-dark-3 rounded-xl p-3 flex flex-row space-x-4 transition-colors duration-150" style="transform: none;">
							<div class="h-full w-auto aspect-square rounded-lg bg-custom-gray-dark-4 flex items-center justify-center group">
								<svg class="fill-black stroke-black dark:fill-white dark:stroke-white"
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <circle cx="512" cy="512" r="512" style="fill:#ffffff"></circle>
                    <path d="M648.86 449.44c-32.34-142.73-108.77-189.66-117-207.59-9-12.65-18.12-35.15-18.12-35.15-.15-.38-.39-1.05-.67-1.7-.93 12.65-1.41 17.53-13.37 30.29-18.52 14.48-113.54 94.21-121.27 256.37-7.21 151.24 109.25 241.36 125 252.85l1.79 1.27v-.11c.1.76 5 36 8.44 73.34H526a726.68 726.68 0 0 1 13-78.53l1-.65a204.48 204.48 0 0 0 20.11-16.45l.72-.65c33.48-30.93 93.67-102.47 93.08-216.53a347.07 347.07 0 0 0-5.05-56.76zM512.35 659.12s0-212.12 7-212.08c5.46 0 12.53 273.61 12.53 273.61-9.72-1.17-19.53-45.03-19.53-61.53z" style="fill:#000000"></path>
                  </g>
                </svg>
							</div>
							<div class="flex flex-col items-left justify-center">
								<p class="text-sm md:text-md">MongoDB</p>
							</div>
						</div>
					</a>
				</div>
			</div>

			<!-- Projects -->
			<div class="my-8">
				<div class="mb-2 font-semibold text-medium">Projects</div>
					<div class="grid grid-cols-2 gap-4">
						<div class="card bg-base-100 shadow-xl">
							<figure class="p-3">
								<img
									src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
									alt="Shoes"
									class="rounded-xl" />
							</figure>
							<div class="card-body items-center text-center pt-0">
								<h5 class="text-sm font-medium">Stripe Payment</h5>
								<p class="text-sm mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
								<div class="card-actions">
									<a href="#" target="_blank" rel="noopener noreferrer">
										<button class="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-auto disabled:cursor-not-allowed disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
										<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="mr-2 size-4">
											<path fill-rule="evenodd" clip-rule="evenodd" d="M7.976 0A7.977 7.977 0 0 0 0 7.976c0 3.522 2.3 6.507 5.431 7.584.392.049.538-.196.538-.392v-1.37c-2.201.49-2.69-1.076-2.69-1.076-.343-.93-.881-1.175-.881-1.175-.734-.489.048-.489.048-.489.783.049 1.224.832 1.224.832.734 1.223 1.859.88 2.3.685.048-.538.293-.88.489-1.076-1.762-.196-3.621-.881-3.621-3.964 0-.88.293-1.566.832-2.153-.05-.147-.343-.978.098-2.055 0 0 .685-.196 2.201.832.636-.196 1.322-.245 2.007-.245s1.37.098 2.006.245c1.517-1.027 2.202-.832 2.202-.832.44 1.077.146 1.908.097 2.104a3.16 3.16 0 0 1 .832 2.153c0 3.083-1.86 3.719-3.62 3.915.293.244.538.733.538 1.467v2.202c0 .196.146.44.538.392A7.984 7.984 0 0 0 16 7.976C15.951 3.572 12.38 0 7.976 0z"></path>
										</svg>Source </button>
									</a>
								</div>
							</div>
						</div>
						<div class="card bg-base-100 shadow-xl">
							<figure class="p-3">
								<img
									src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
									alt="Shoes"
									class="rounded-xl" />
							</figure>
							<div class="card-body items-center text-center pt-0">
								<h3 class="text-sm font-medium">Auth Api Package</h3>
								<p class="text-sm mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
								<div class="card-actions">
									<a href="#" target="_blank" rel="noopener noreferrer">
										<button class="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-auto disabled:cursor-not-allowed disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
										<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="mr-2 size-4">
											<path fill-rule="evenodd" clip-rule="evenodd" d="M7.976 0A7.977 7.977 0 0 0 0 7.976c0 3.522 2.3 6.507 5.431 7.584.392.049.538-.196.538-.392v-1.37c-2.201.49-2.69-1.076-2.69-1.076-.343-.93-.881-1.175-.881-1.175-.734-.489.048-.489.048-.489.783.049 1.224.832 1.224.832.734 1.223 1.859.88 2.3.685.048-.538.293-.88.489-1.076-1.762-.196-3.621-.881-3.621-3.964 0-.88.293-1.566.832-2.153-.05-.147-.343-.978.098-2.055 0 0 .685-.196 2.201.832.636-.196 1.322-.245 2.007-.245s1.37.098 2.006.245c1.517-1.027 2.202-.832 2.202-.832.44 1.077.146 1.908.097 2.104a3.16 3.16 0 0 1 .832 2.153c0 3.083-1.86 3.719-3.62 3.915.293.244.538.733.538 1.467v2.202c0 .196.146.44.538.392A7.984 7.984 0 0 0 16 7.976C15.951 3.572 12.38 0 7.976 0z"></path>
										</svg>Source </button>
									</a>
								</div>
							</div>
						</div>
						<div class="card bg-base-100 shadow-xl">
							<figure class="p-3">
								<img
									src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
									alt="Shoes"
									class="rounded-xl" />
							</figure>
							<div class="card-body items-center text-center pt-0">
								<h3 class="text-sm font-medium">Nodejs Scraper</h3>
								<p class="text-sm mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
								<div class="card-actions">
									<a href="#" target="_blank" rel="noopener noreferrer">
										<button class="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-auto disabled:cursor-not-allowed disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
										<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="mr-2 size-4">
											<path fill-rule="evenodd" clip-rule="evenodd" d="M7.976 0A7.977 7.977 0 0 0 0 7.976c0 3.522 2.3 6.507 5.431 7.584.392.049.538-.196.538-.392v-1.37c-2.201.49-2.69-1.076-2.69-1.076-.343-.93-.881-1.175-.881-1.175-.734-.489.048-.489.048-.489.783.049 1.224.832 1.224.832.734 1.223 1.859.88 2.3.685.048-.538.293-.88.489-1.076-1.762-.196-3.621-.881-3.621-3.964 0-.88.293-1.566.832-2.153-.05-.147-.343-.978.098-2.055 0 0 .685-.196 2.201.832.636-.196 1.322-.245 2.007-.245s1.37.098 2.006.245c1.517-1.027 2.202-.832 2.202-.832.44 1.077.146 1.908.097 2.104a3.16 3.16 0 0 1 .832 2.153c0 3.083-1.86 3.719-3.62 3.915.293.244.538.733.538 1.467v2.202c0 .196.146.44.538.392A7.984 7.984 0 0 0 16 7.976C15.951 3.572 12.38 0 7.976 0z"></path>
										</svg>Source </button>
									</a>
								</div>
							</div>
						</div>
						<div class="card bg-base-100 shadow-xl">
							<figure class="p-3">
								<img
									src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
									alt="Shoes"
									class="rounded-xl" />
							</figure>
							<div class="card-body items-center text-center pt-0">
								<h3 class="text-sm font-medium">Chrome Extension Scraper</h3>
								<p class="text-sm mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
								<div class="card-actions">
									<a href="#" target="_blank" rel="noopener noreferrer">
										<button class="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-auto disabled:cursor-not-allowed disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
										<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="mr-2 size-4">
											<path fill-rule="evenodd" clip-rule="evenodd" d="M7.976 0A7.977 7.977 0 0 0 0 7.976c0 3.522 2.3 6.507 5.431 7.584.392.049.538-.196.538-.392v-1.37c-2.201.49-2.69-1.076-2.69-1.076-.343-.93-.881-1.175-.881-1.175-.734-.489.048-.489.048-.489.783.049 1.224.832 1.224.832.734 1.223 1.859.88 2.3.685.048-.538.293-.88.489-1.076-1.762-.196-3.621-.881-3.621-3.964 0-.88.293-1.566.832-2.153-.05-.147-.343-.978.098-2.055 0 0 .685-.196 2.201.832.636-.196 1.322-.245 2.007-.245s1.37.098 2.006.245c1.517-1.027 2.202-.832 2.202-.832.44 1.077.146 1.908.097 2.104a3.16 3.16 0 0 1 .832 2.153c0 3.083-1.86 3.719-3.62 3.915.293.244.538.733.538 1.467v2.202c0 .196.146.44.538.392A7.984 7.984 0 0 0 16 7.976C15.951 3.572 12.38 0 7.976 0z"></path>
										</svg>Source </button>
									</a>
								</div>
							</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- footer -->
	<footer class="footer footer-center text-base-content mt-4">
		<aside>
			<p>Copyright © 2024 - Richard</p>
		</aside>
	</footer>
</template>
