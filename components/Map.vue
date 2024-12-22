<template>
  <div class="map-wrap">
    <div id="map" class="map rounded-lg" ref="mapContainer"></div>
  </div>
</template>

<script setup>
import { shallowRef, onMounted, onUnmounted, watch, inject, ref } from 'vue';
import { Map, MapStyle, Marker, config } from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";

const mapContainer = shallowRef(null);
const map = shallowRef(null);
const isDarkMode = inject('isDarkMode');
let timerContainer = null;

const currentTime = ref(''); // Reactive state for the current time

// Function to update the time
const updateTime = () => {
  const now = new Date();
  // Format the time to 12-hour format with GMT+8
  const options = {
    timeZone: 'Asia/Manila',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true, // For 12-hour format
  };

  const formattedTime = now.toLocaleTimeString('en-US', options); // Format time
  currentTime.value = `${formattedTime} GMT+8`; // Update the current time
};

// Function to create the timer overlay
const createTimerOverlay = () => {
  if (!timerContainer) {
    timerContainer = document.createElement('div');
    timerContainer.id = 'timer-overlay';
    timerContainer.style.position = 'absolute';
    timerContainer.style.top = '10px';
    timerContainer.style.left = '10px';
    timerContainer.style.padding = '5px 10px';
    timerContainer.style.background = 'rgba(0, 0, 0, 0.5)';
    timerContainer.style.color = 'white';
    timerContainer.style.borderRadius = '0.5rem';
    timerContainer.style.zIndex = '10'; // Ensure it's above the map
    // Initial time display
    timerContainer.textContent = currentTime.value;

    // Append the timer container to the map
    document.getElementById('map').appendChild(timerContainer);

    // Update the timer every second
    setInterval(() => {
      timerContainer.textContent = currentTime.value; // Update the timer text
    }, 1000);
  }
};

// Use the onMounted lifecycle hook from Vue 3's Composition API
onMounted(async () => {
  // First, create the timer overlay before the map initialization
  createTimerOverlay();

  // Set your MapTiler API key
  config.apiKey = 'mZc0P9hLNjSYurLkdwFc';

  var size = 100;

  // Implementation of CustomLayerInterface to draw a pulsing dot icon on the map
  var pulsingDot = {
    width: size,
    height: 100,
    data: new Uint8Array(size * size * 4),

    // Get rendering context for the map canvas when the layer is added to the map
    onAdd: function () {
      var canvas = document.createElement('canvas');
      canvas.width = this.width;
      canvas.height = this.height;
      this.context = canvas.getContext('2d');
    },

    // Called once before every frame where the icon will be used
    render: function () {
      var duration = 1000;
      var t = (performance.now() % duration) / duration;

      var radius = (size / 2) * 0.3;
      var outerRadius = (size / 2) * 0.7 * t + radius;
      var context = this.context;

      // Draw outer circle
      context.clearRect(0, 0, this.width, this.height);
      context.beginPath();
      context.arc(this.width / 2, this.height / 2, outerRadius, 0, Math.PI * 2);
      context.fillStyle = 'rgba(30, 162, 231,' + (1 - t) + ')'; // RGB 30, 162, 231 with fading effect
      context.fill();

      // Draw inner circle
      context.beginPath();
      context.arc(this.width / 2, this.height / 2, radius, 0, Math.PI * 2);
      context.fillStyle = 'rgb(30, 162, 231)'; // Solid RGB 30, 162, 231
      context.strokeStyle = 'white';
      context.lineWidth = 2 + 4 * (1 - t);
      context.fill();
      context.stroke();

      // Update this image's data with data from the canvas
      this.data = context.getImageData(0, 0, this.width, this.height).data;

      // Continuously repaint the map, resulting in the smooth animation of the dot
      map.value.triggerRepaint();

      // Return `true` to let the map know that the image was updated
      return true;
    }
  };

  const initializeMap = () => {
    // Update the time every second
    setInterval(updateTime, 1000);

    map.value = new Map({
      container: 'map',
      style: isDarkMode.value ? MapStyle.STREETS.DARK : MapStyle.STREETS,
      center: [122.9326, 12.8797], // Center of the Philippines
      zoom: 3,
      speed: 1,
      curve: 1,
      navigationControl: false, // Disable the navigation control
      attributionControl: false // Disable attribution control if not needed
    });

    map.value.on('load', () => {
      addPulsingDot();
      performFlyToAnimation();
    });

    const controls = document.querySelector('.maplibregl-ctrl-bottom-left');
    if (controls) {
      controls.remove();
    }

    const controls2 = document.querySelector('.maplibregl-ctrl-bottom-right');
    if (controls2) {
      controls2.remove();
    }

    const controls3 = document.querySelector('.maplibregl-ctrl-top-right');
    if (controls3) {
      controls3.remove();
    }
  };

  const addPulsingDot = () => {
    map.value.addImage('pulsing-dot', pulsingDot, { pixelRatio: 2 });
    map.value.addSource('points', {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [123.85598078370096, 9.64026121471487], // Bohol coordinates
            },
            id: 'c102d02b-1ef6-4f3e-9a2a-dc07bc2357b2',
            properties: { text: 'Bohol' },
          },
        ],
      },
    });
    map.value.addLayer({
      id: 'points',
      type: 'symbol',
      source: 'points',
      layout: {
        'icon-image': 'pulsing-dot',
      },
    });
  };

  const performFlyToAnimation = () => {
    setTimeout(() => {
      map.value.flyTo({
        center: [123.85598078370096, 9.64026121471487], // Bohol
        zoom: 12,
        speed: 1,
        curve: 1,
      });
    }, 800);
  };

  // Initialize the map after the timer is added
  initializeMap();

  // Watch for dark mode changes
  watch(isDarkMode, (darkMode) => {
    map.value.setStyle(darkMode ? MapStyle.STREETS.DARK : MapStyle.STREETS);
    map.value.once('styledata', () => {
      addPulsingDot(); // Re-add the pulsing dot after the style change
      createTimerOverlay(); // Ensure the timer overlay is not removed
    });
  });
});

onUnmounted(() => {
  map.value?.remove();
});
</script>

<style scoped>
.map-wrap {
  position: relative;
  width: 100%;
  height: 180px; /* calculate height of the screen minus the heading */
}

.map {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
