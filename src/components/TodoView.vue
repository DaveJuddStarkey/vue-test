<script setup>
import GradientTitle from './GradientTitle.vue';
import TodoListCheckbox from './TodoListCheckbox.vue';
import TodoListRemovable from './TodoListRemovable.vue';
</script>

<template>
  <GradientTitle>To-Do List</GradientTitle>
  <div class="md:flex pt-8">
    <div class="md:basis-1/2 pb-8 md:pb-0">
      <h2 class="text-2xl bold">Checkboxes</h2>
      <TodoListCheckbox></TodoListCheckbox>
    </div>
    <div class="md:basis-1/2 pb-8 md:pb-0">
      <h2 class="text-2xl bold">Removable</h2>
      <TodoListRemovable></TodoListRemovable>
    </div>
  </div>
</template>