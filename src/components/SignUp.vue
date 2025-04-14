<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="username" placeholder="Nom d'utilisateur" required />
    <input v-model="email" type="email" placeholder="Email" required />
    <input v-model="password" type="password" placeholder="Mot de passe" required />
    <button type="submit">Créer un compte</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { postJSON } from '../api-client/api-client.js'

const username = ref('')
const email = ref('')
const password = ref('')

async function handleSubmit() {
  try {
    const res = await postJSON('/api/users', {
      username: username.value,
      email: email.value,
      password: password.value
    })

    if (res.error) {
      alert(res.error)
      return
    }

    // login auto après création
    const loginRes = await postJSON('/api/token', {
      username: username.value,
      password: password.value
    })

    if (loginRes.error) {
      alert(loginRes.error)
      return
    }

    localStorage.setItem('authUsername', username.value)
    localStorage.setItem('authMessage', loginRes.message)
    localStorage.setItem('authQuote', JSON.stringify(loginRes.quote))

    window.location.href = '/dashboard'
  } catch (err) {
    console.error(err)
    alert("Erreur lors de l'inscription")
  }
}
</script>

<style scoped>
form {
  max-width: 400px;
  margin: 4rem auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

input, button {
  padding: 0.8rem;
  font-size: 1rem;
  border-radius: 6px;
  border: 1px solid #ccc;
}

button {
  background-color: #84d4fd;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
}

button:hover {
  background-color: #5bc0f8;
}
</style>
