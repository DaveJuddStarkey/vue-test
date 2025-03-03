<script setup>
import { RouterLink } from 'vue-router';
import GradientTitle from './GradientTitle.vue';
import P from './typography/P.vue';
</script>
<template>
  <section class="md:flex space-x-16 items-center">
    <div class="basis-1/2 pb-8 md:pb-0">
      <GradientTitle>Home</GradientTitle>
      <P>Here is some programmer ipsum for your enjoyment.</P>
      <P>Good programmers use their brains, but good guidelines save us having to think out every case. (Francis Glassborow) Don't worry if it doesn't work right. If everything did, you'd be out of a job. (Mosher's Law of Software Engineering)</P>
      <P>I think Microsoft named .Net so it wouldn't show up in a Unix directory listing. (Oktal) One man's crappy software is another man's full-time job. (Jessica Gaston) Don't worry if it doesn't work right. If everything did, you'd be out of a job. (Mosher's Law of Software Engineering) First, solve the problem. Then, write the code. (John Johnson)</P>
      <P><RouterLink to="/todos" class="text-purple-300">Manage To-Do List ></RouterLink></P>
    </div>
    <div class="basis-1/2">
      <img src="../assets/gradient-shape.png" alt="Gradient shape" class="w-full" />
    </div>
  </section>
</template>