<script setup>
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <Header></Header>
  <main class="grow-1 font-parkinsans">
    <RouterView />
  </main>
  <Footer></Footer>
</template>