<template>
    <div class="dashboard">
      <h1>Bienvenue sur le Dashboard</h1>
      <p v-if="quote">Citation : "{{ quote.text }}"</p>
      <p v-if="quote">— {{ quote.author }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const quote = ref({
    text: "La connaissance s'acquiert par l'expérience.",
    author: "Albert Einstein"
  })
  
  onMounted(() => {
    const savedQuote = localStorage.getItem('authQuote')
    if (savedQuote) {
      quote.value = JSON.parse(savedQuote)
    }
  })
  </script>
  
  <style scoped>
  .dashboard {
    text-align: center;
    margin-top: 2rem;
  }
  </style>
  