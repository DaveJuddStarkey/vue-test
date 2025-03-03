<script setup>
import { onMounted } from 'vue';
import GradientTitle from './GradientTitle.vue';
import LoadingSpinner from './LoadingSpinner.vue';

onMounted(() => {
  const adLink = document.querySelector('.map-embed a');
  setTimeout(() => {
    console.log('now')
    adLink.remove()
  }, 1000)});
</script>

<template>
  <GradientTitle>Contact</GradientTitle>
  <div class="map-embed relative">
    <LoadingSpinner></LoadingSpinner>
    <iframe
      class="z-1 relative w-full"
      width="701"
      height="400"
      frameborder="0"
      scrolling="no"
      marginheight="0"
      marginwidth="0"
      id="gmap_canvas"
      src="https://maps.google.com/maps?width=701&height=400&hl=en&q=6700%20Washington%20Ave%20Eden%20Prairie+(Vue%20Test)&t=&z=13&ie=UTF8&iwloc=B&output=embed"
    ></iframe><a href='https://www.acadoo.de/leistungen/ghostwriter-doktorarbeit/'>Dissertation schreiben</a>
    <component
      is="script"
      src='https://embedmaps.com/google-maps-authorization/script.js?id=14ccbe68ca462538b75f79bf72208ca994c372e9'
      async
    ></component>
  </div>
</template>

<style>
  .map-embed a {
    color: #111;
  }
</style>