<script setup>
  // Demo using the Composition API

  import { onMounted, ref } from 'vue';

  const heading = ref('Vue Test');
  const subheading = ref('List Items');
  const list = ref([
    "Clean the house",
    "Buy groceries",
    "Walk the dog",
    "Wash the car"
  ]);
  const link = ref("https://www.starkey.com");
  const status = ref('active');
  const toggleStatus = () => {
    status.value = status.value === 'active' ? 'inactive' : 'active';
  }
  const newTask = ref('');
  const addTask = () => {
    if (newTask.value.trim() !== "") {
      list.value.push(newTask.value);
      newTask.value = "";
    }
  }
  const deleteTask = (index) => {
      console.log(index)
      list.value.splice(index, 1);
  }

  onMounted(async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await response.json();
      list.value = data.map(item => item.title)
    } catch {
      console.log("Error fetching data")
    }
  });
</script>

<template>
  <h1>{{ heading }}</h1>
  <h2>{{ subheading }}</h2>
  <ul v-if="list.length">
    <li v-for="(item, index) in list" :key="item"><span>{{ item }}</span><button @click="deleteTask(index)">X</button></li>
  </ul>
  <hr />
  <h2>Link</h2>
  <a :href="link">Starkey</a>
  <hr />
  <h2>Button</h2>
  <p>{{ status }}</p>
  <button v-on:click="toggleStatus">Toggle status</button>
  <hr />
  <h2>Add Task</h2>
  <form @submit.prevent="addTask">
    <label for="newTask">New Task</label>
    <input type="text" id="newTask" name="newTask" v-model="newTask" />
    <button type="submit">Add Task</button>
  </form>
</template>

<style scoped>
  h1 {
    color: rebeccapurple;
    padding-bottom: 2rem;
  }
</style>
