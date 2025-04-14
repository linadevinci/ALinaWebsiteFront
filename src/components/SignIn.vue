<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="username" placeholder="Nom d'utilisateur" required />
    <input v-model="password" type="password" placeholder="Mot de passe" required />
    <button type="submit">Se connecter</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { postJSON } from '../api-client/api-client.js'

const username = ref('')
const password = ref('')

async function handleSubmit() {
  try {
    const res = await postJSON('/api/token', {
      username: username.value,
      password: password.value
    })

    if (res.error) {
      alert(res.error)
      return
    }

    localStorage.setItem('authUsername', username.value)
    localStorage.setItem('authMessage', res.message)
    localStorage.setItem('authQuote', JSON.stringify(res.quote))

    window.location.href = '/dashboard'
  } catch (err) {
    alert("Erreur lors de la connexion")
    console.error(err)
  }
}
</script>
