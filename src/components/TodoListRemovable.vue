<script setup>
import { ref } from 'vue';

const todos = ref([
  'Learn Vue',
  'Learn Nuxt',
  'Build something awesome'
]);
const newTodo = ref('');
const addTodo = () => {
  if (newTodo.value.trim() !== "") {
    todos.value.push(newTodo.value);
    newTodo.value = "";
  }
}
const removeTodo = (index) => {
  console.log(index);
  todos.value.splice(index, 1);
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
    <li v-for="(todo, index) in todos" :key="todo.title" class="relative p-2">
      <span @click="removeTodo(index)" class="inline-block h-full px-2 bg-purple-800 text-slate-100 mr-4 cursor-pointer">X</span>{{ todo }}
    </li>
  </ul>
</template>