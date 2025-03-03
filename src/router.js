import { createRouter, createWebHistory } from 'vue-router'

import HomeView from './components/HomeView.vue'
import TodoView from './components/TodoView.vue'
import BlogView from './components/BlogView.vue'
import BlogPostView from './components/BlogPostView.vue'
import MarkdownView from './components/MarkdownView.vue'
import ContactView from './components/ContactView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/todos', component: TodoView },
  { path: '/blog', component: BlogView },
  { path: '/blog/:id', component: BlogPostView },
  { path: '/markdown', component: MarkdownView },
  { path: '/contact', component: ContactView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active',
})

export default router