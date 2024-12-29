<script setup>
  import { inject } from 'vue';

  const isDarkMode = inject('isDarkMode');
</script>

<template>
  <div class="navbar px-0">
    <div class="flex-1">
      <NuxtLink to="/">
        <span
          class="text-base font-black tracking-[-1px]">
          R G
        </span>
      </NuxtLink>
    </div>
    <div class="flex-none">
      <div class="navbar-center">
        <ul class="menu menu-horizontal">
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/blog">Blog</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about">About</NuxtLink>
          </li>
          <li>
            <label
              class="swap swap-rotate"
              for="dark-mode"
              aria-label="Toggle dark mode">
              <!-- this hidden checkbox controls the state -->
              <input type="checkbox"
                class="theme-controller"
                id="dark-mode"
                value="dark"
                v-model="isDarkMode"
                aria-checked="false" />
              <img
                class="swap-off h-5 w-5 dark:brightness-1 dark:invert"
                src="/svg/general/sun.svg"
                alt="sun icon"
                width="24"
                height="24"
                loading="lazy"/>
              <img
                class="swap-on h-5 w-5 dark:brightness-1 dark:invert"
                src="/svg/general/moon.svg"
                alt="moon icon"
                width="24"
                height="24"
                loading="lazy"/>
            </label>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>