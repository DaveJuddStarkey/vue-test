<script setup>
import { RouterLink } from 'vue-router';
import { nav } from '../nav';
</script>

<template>
  <header class="pb-4">
    <nav>
      <ul class="flex border-b">
        <li v-for="link in nav" :key="link.name" class="p-4">
          <RouterLink :to="link.path">{{ link.name }}</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>