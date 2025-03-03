<script setup>
import GradientTitle from './GradientTitle.vue';
import P from '../components/typography/P.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
import { ref, onMounted } from 'vue';

const data = ref({});

onMounted(async () => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    data.value = await response.json();
    console.log(data.value)
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
});
</script>

<template>
  <GradientTitle>
    <span class="capitalize">{{ data.title }}</span>
  </GradientTitle>
  <div class="md:flex space-x-16">
    <div class="basis-1/2 pb-8 md:pb-0">
      <P class="first-letter:capitalize">{{ data.body }}.</P>
    </div>
    <div class="basis-1/2 pb-8 md:pb-0">
      <img :src="`http://picsum.photos/id/${data.id + 30}/704/396`" alt="Random Image" class="w-full h-72 object-cover bg-slate-800" />
    </div>
  </div>
</template>