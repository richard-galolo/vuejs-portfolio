<template>
  <p class="text-sm">{{ currentTime }}</p>
</template>

<script>
export default {
  data() {
    return {
      currentTime: '', // To store the current time
    };
  },
  methods: {
    updateTime() {
      const now = new Date();
      // Format the time to 12-hour format with GMT+8
      const options = {
        timeZone: 'Asia/Manila',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true, // For 12-hour format
      };

      const formattedTime = now.toLocaleTimeString('en-US', options); // Format time
      this.currentTime = `${formattedTime} GMT+8`; // Append the GMT+8 offset
    },
  },
  mounted() {
    // Update time every second
    this.updateTime();
    this.timer = setInterval(this.updateTime, 1000);
  },
  beforeUnmount() {
    // Clear timer when the component is destroyed
    clearInterval(this.timer);
  },
};
</script>

<style scoped>
div {
  font-family: Arial, sans-serif;
  font-size: 1.2rem;
}
</style>
