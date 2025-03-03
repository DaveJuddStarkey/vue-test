<script>
  // Demo using the Options API

  export default {
    data() {
      return {
        heading: 'Vue Test',
        subheading: 'List Items',
        list: [
          { id: 1, name: 'John Doe' },
          { id: 2, name: 'Jane Doe' },
          { id: 3, name: 'John Smith' },
          { id: 4, name: 'Jane Smith' }
        ],
        link: "https://www.starkey.com",
        status: false
      };
    },
    methods: {
      toggleStatus() {
        this.status = !this.status;
      }
    }
  };
</script>

<template>
  <h1>{{ heading }}</h1>
  <h2>{{ subheading }}</h2>
  <ul v-if="list.length">
    <li v-for="item in list" :key="item.id">{{ item.name }}</li>
  </ul>
  <hr />
  <h2>Link</h2>
  <a :href="link">Starkey</a>
  <hr />
  <h2>Button</h2>
  <p>{{ status }}</p>
  <button v-on:click="toggleStatus">Toggle Status</button>
</template>

<style scoped>
  h1 {
    color: rebeccapurple;
    padding-bottom: 2rem;
  }
</style>
