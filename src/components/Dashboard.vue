<template>
  <div class="dashboard">
    <h1>Bonjour, {{ username }} !</h1>
    <p class="welcome-message">{{ message }}</p>
    
    <div class="quote-box" v-if="quote">
      <p class="quote">"{{ quote.text }}"</p>
      <p class="author">— {{ quote.author }}</p>
    </div>
    <p v-else class="loading">Chargement...</p>
    
    <button @click="getNewQuote" class="btn-refresh">Nouvelle citation</button>
    <button @click="logout" class="btn-logout">Se déconnecter</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getQuote } from '../api-client/api-client.js'

const username = ref(localStorage.getItem('authUsername') || '')
const message = ref(localStorage.getItem('authMessage') || 'Voici votre citation du jour !')
const quote = ref(null)

onMounted(() => {
  const storedQuote = localStorage.getItem('authQuote')
  if (storedQuote) {
    quote.value = JSON.parse(storedQuote)
  }
})

async function getNewQuote() {
  try {
    const newQuote = await getQuote()
    quote.value = newQuote
    localStorage.setItem('authQuote', JSON.stringify(newQuote))
  } catch (error) {
    console.error('Erreur lors de la récupération d\'une nouvelle citation:', error)
  }
}

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
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
}

.welcome-message {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
}

.quote-box {
  background: white;
  padding: 2rem;
  margin: 0 auto 2rem;
  border-radius: 12px;
  max-width: 600px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.quote-box:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15);
}

.quote {
  font-style: italic;
  font-size: 1.4rem;
  line-height: 1.6;
}

.author {
  margin-top: 1.5rem;
  font-weight: bold;
  color: #666;
}

.loading {
  font-size: 1.2rem;
  color: #666;
}

.btn-refresh {
  padding: 0.75rem 1.5rem;
  font-weight: bold;
  background: #7cbdf9;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 1rem;
  transition: background 0.2s ease;
}

.btn-refresh:hover {
  background: #5ba8ed;
}

.btn-logout {
  padding: 0.75rem 1.5rem;
  font-weight: bold;
  background: #ff8585;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s ease;
}

.btn-logout:hover {
  background: #ff5c5c;
}
</style>