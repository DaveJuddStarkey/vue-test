<script setup>
import { RouterLink } from 'vue-router';
import { nav } from '../nav';
</script>

<template>
  <footer class="pt-4">
    <nav>
      <ul class="flex border-t">
        <li v-for="link in nav" :key="link.name" class="p-4">
          <RouterLink :to="link.path">{{ link.name }}</RouterLink>
        </li>
      </ul>
    </nav>
  </footer>
</template>