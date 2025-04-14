<template>
  <div class="dashboard">
    <h1>{{ message }}</h1>
    <div class="quote-box" v-if="quote">
      <p class="quote">"{{ quote.text }}"</p>
      <p class="author">— {{ quote.author }}</p>
    </div>
    <p v-else>Chargement...</p>
    <button @click="logout" class="btn-logout">Se déconnecter</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const username = localStorage.getItem('authUsername')
const message = localStorage.getItem('authMessage')
const quote = ref(null)

onMounted(() => {
  const storedQuote = localStorage.getItem('authQuote')
  if (storedQuote) {
    quote.value = JSON.parse(storedQuote)
  }
})

function logout() {
  localStorage.clear()
  window.location.href = '/'
}
</script>

<style scoped>
.dashboard {
  font-family: 'Segoe UI', sans-serif;
  padding: 4rem 2rem;
  text-align: center;
  background: linear-gradient(to right, #f0f8ff, #e8dfff);
  min-height: 100vh;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333;
}

.quote-box {
  background: white;
  padding: 2rem;
  margin: 0 auto 3rem;
  border-radius: 12px;
  max-width: 600px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.quote {
  font-style: italic;
  font-size: 1.4rem;
}

.author {
  margin-top: 1rem;
  font-weight: bold;
  color: #666;
}

.btn-logout {
  padding: 0.75rem 1.5rem;
  font-weight: bold;
  background: #ff8585;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.btn-logout:hover {
  background: #ff5c5c;
}
</style>
