<script setup>
import { marked } from 'marked';
import GradientTitle from './GradientTitle.vue';
import { markdown } from '../assets/markdown.js';

const markdownHTML = marked(markdown);
</script>
<template>
  <GradientTitle>Markdown</GradientTitle>
  <div class="markdown" v-html="markdownHTML"></div>
</template>

<style>
.markdown img {
  max-width: 400px;
  height: auto;
}

.markdown h1 {
  font-size: 2.5rem;
  margin-top: 2rem;
}

.markdown h2 {
  font-size: 2rem;
  margin-top: 1.5rem;
}

.markdown h3 {
  font-size: 1.5rem;
  margin-top: 1.25rem;
}

.markdown h4 {
  font-size: 1.25rem;
  margin-top: 1rem;
}

.markdown h5 {
  font-size: 1rem;
  margin-top: 0.75rem;
}

.markdown h6 {
  font-size: 0.75rem;
  margin-top: 0.75rem;
}

.markdown p {
  margin-top: 1rem;
}

.markdown ul {
  margin-top: 1rem;
}

.markdown ol {
  margin-top: 1rem;
}

.markdown blockquote {
  margin-top: 1rem;
}

.markdown pre {
  margin-top: 1rem;
}

.markdown code {
  margin-top: 1rem;
}

.markdown table {
  margin-top: 1rem;
}

.markdown a {
  color: #6c63ff;
}

.markdown a:hover {
  color: #4f46e5;
}

.markdown a:visited {
  color: #a855f7;
}

.markdown a:visited:hover {
  color: #8b5be0;
}

.markdown strong {
  font-weight: 700;
}

.markdown em {
  font-style: italic;
}

.markdown del {
  text-decoration: line-through;
}

.markdown hr {
  margin-top: 1rem;
}

.markdown img {
  margin-top: 1rem;
}

.markdown table {
  margin-top: 1rem;
  border-collapse: collapse;
}

.markdown table th {
  font-weight: 700;
  padding: 0.5rem;
  border: 1px solid #e2e8f0;
}

.markdown table td {
  font-weight: 400;
  border: 1px solid #e2e8f0;
  padding: 0.5rem;
}

.markdown blockquote {
  margin-top: 1rem;
  border-left: 4px solid #6c63ff;
  padding-left: 1rem;
}

.markdown details {
  margin-top: 1rem;
}
</style>