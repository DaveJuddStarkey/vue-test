<script setup>
import GradientTitle from './GradientTitle.vue';
import P from '../components/typography/P.vue';
import { RouterLink } from 'vue-router';
import { ref, onMounted } from 'vue';

const data = ref([]);

onMounted(async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const posts = await response.json();
    data.value = posts.slice(0, 10)
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
});
</script>

<template>
  <GradientTitle>Blog</GradientTitle>
  <ul v-if="data.length" class="sm:flex flex-wrap">
    <li v-for="post in data" :key="post.id" class="flex flex-col sm:basis-1/2 lg:basis-1/3 p-4 pb-8">
      <img :src="`http://picsum.photos/id/${post.id + 30}/320/180`" alt="Random Image" class="w-full h-48 object-cover bg-slate-700" />
      <h2 class="text-2xl font-bold pt-4 capitalize"><RouterLink :to="`/blog/${post.id}`" class="text-accent-purple-500">{{ post.title }}</RouterLink></h2>
      <P class="grow first-letter:capitalize balance pt-4" >{{ post.body }}</P>
    </li>
  </ul>
</template>