<script setup>
import { ref } from 'vue';

const todos = ref([
  {
    title: 'Learn Vue',
    completed: false
  },
  {
    title: 'Learn Nuxt',
    completed: false
  },
  {
    title: 'Build something awesome',
    completed: false
  }
]);
const newTodo = ref('');
const addTodo = () => {
  if (newTodo.value.trim() !== "") {
    todos.value.push({
      title: newTodo.value,
      completed: false
    });
    newTodo.value = "";
  }
}
</script>

<template>
  <div class="pt-4">
    <h2 class="pb-2">To-Do List (Checkboxes)</h2>
    <form @submit.prevent="addTodo">
      <label for="newTodo" class="sr-only">New To-Do</label>
      <input type="text" id="newTodo" name="newTodo" v-model="newTodo" class="bg-purple-100 text-slate-900" />
      <button type="submit" class="bg-purple-100 ml-4 px-4 py-2 text-slate-900 rounded-sm">Add To-Do</button>
    </form>
  </div>
  <ul v-if="todos.length" class="pt-8">
    <li v-for="todo in todos" :key="todo.title" class="relative p-2">
      <label :class="{ 'line-through': todo.completed }">
        <input type="checkbox" class="accent-purple-500" v-model="todo.completed" />
        <span class="text-purple-300 pl-4">{{ todo.title }}</span>
      </label>
    </li>
  </ul>
</template>