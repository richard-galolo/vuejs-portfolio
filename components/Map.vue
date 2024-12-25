<template>
  <div
    class="map-wrap rounded-lg"
    v-motion-slide-visible-once-top
    :delay="100"
    :duration="500"
  >
    <div
      id="map"
      class="map rounded-lg"
      ref="mapContainer">
      <div
        id="timer-overlay"
        v-if="currentTime"
        class="timer-overlay">
        {{ currentTime }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { shallowRef, onMounted, onUnmounted, watch, inject, ref } from 'vue';
import { Map, MapStyle, config } from '@maptiler/sdk';

const mapContainer = shallowRef(null);
const map = shallowRef(null);
const isDarkMode = inject('isDarkMode');

const currentTime = ref('--:-- -- GMT+8'); // Reactive state for the current time

// Function to update the time asynchronously
const updateTime = async () => {
  const now = new Date();
  const options = {
    timeZone: 'Asia/Manila',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  };
  currentTime.value = `${now.toLocaleTimeString('en-US', options)} GMT+8`; // Update the current time
};

// Create pulsing dot layer
const createPulsingDot = () => {
  const size = 100;
  const pulsingDot = {
    width: size,
    height: size,
    data: new Uint8Array(size * size * 4),
    onAdd() {
      const canvas = document.createElement('canvas');
      canvas.width = this.width;
      canvas.height = this.height;
      this.context = canvas.getContext('2d');
    },
    render() {
      const duration = 1000;
      const t = (performance.now() % duration) / duration;
      const radius = (size / 2) * 0.3;
      const outerRadius = (size / 2) * 0.7 * t + radius;
      const context = this.context;

      context.clearRect(0, 0, this.width, this.height);
      context.beginPath();
      context.arc(this.width / 2, this.height / 2, outerRadius, 0, Math.PI * 2);
      context.fillStyle = `rgba(30, 162, 231,${1 - t})`;
      context.fill();

      context.beginPath();
      context.arc(this.width / 2, this.height / 2, radius, 0, Math.PI * 2);
      context.fillStyle = 'rgb(30, 162, 231)';
      context.strokeStyle = 'white';
      context.lineWidth = 2 + 4 * (1 - t);
      context.fill();
      context.stroke();

      this.data = context.getImageData(0, 0, this.width, this.height).data;
      map.value.triggerRepaint();
      return true;
    }
  };
  return pulsingDot;
};

// Initialize map and add layers asynchronously
const initializeMap = async () => {
  import('@maptiler/sdk/dist/maptiler-sdk.css');

  config.apiKey = 'mZc0P9hLNjSYurLkdwFc';

  try {
    map.value = new Map({
      container: 'map',
      style: isDarkMode.value ? MapStyle.BASIC.DARK : MapStyle.BASIC,
      center: [122.9326, 12.8797],
      zoom: 3,
      navigationControl: false,
      geolocateControl: false,
    });

    removeControls();

    await new Promise(resolve => {
      map.value.on('load', () => {
        resolve();
      });
    });

    map.value.addImage('pulsing-dot', createPulsingDot(), { pixelRatio: 2 });
    map.value.addSource('points', {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: [{
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [123.85598078370096, 9.64026121471487], // Bohol coordinates
          },
          id: 'c102d02b-1ef6-4f3e-9a2a-dc07bc2357b2',
          properties: { text: 'Bohol' },
        }],
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

    // Fly to Bohol after map load
    map.value.flyTo({
      center: [123.85598078370096, 9.64026121471487],
      zoom: 10,
      speed: 1,
      curve: 1,
    });
  } catch (error) {
    console.error('Error initializing map:', error);
  }
};

// Remove unnecessary map controls
const removeControls = () => {
  const controls = [
    '.maplibregl-ctrl-bottom-left',
    '.maplibregl-ctrl-bottom-right',
  ];
  controls.forEach(control => {
    const controlElem = document.querySelector(control);
    if (controlElem) {
      controlElem.remove();
    }
  });
};

// Watch for dark mode changes asynchronously
watch(isDarkMode, async (darkMode) => {
  map.value.setStyle(darkMode ? MapStyle.BASIC.DARK : MapStyle.BASIC);
  map.value.once('styledata', () => {
    map.value.addImage('pulsing-dot', createPulsingDot(), { pixelRatio: 2 });
    map.value.addSource('points', {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: [{
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [123.85598078370096, 9.64026121471487], // Bohol coordinates
          },
          id: 'c102d02b-1ef6-4f3e-9a2a-dc07bc2357b2',
          properties: { text: 'Bohol' },
        }],
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
  });
});

// Initialize timer and map
onMounted(async () => {
  updateTime();
  setInterval(updateTime, 2000); // Update time every second
  await initializeMap(); // Initialize the map asynchronously
});

onUnmounted(() => {
  map.value?.remove(); // Clean up map on component unmount
});
</script>

<style scoped>
.map-wrap {
  position: relative;
  width: 100%;
  height: 180px; /* Adjust as needed */
  background-color: #e5e5d7;
}

.map {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #e5e5d7;
}

.timer-overlay {
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 5px 10px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 0.5rem;
  z-index: 10;
  font: 12px / 20px Helvetica Neue, Arial, Helvetica, sans-serif;
}
</style>
