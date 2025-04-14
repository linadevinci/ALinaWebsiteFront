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
    alert("Erreur lors de l'inscription")
    console.error(err)
  }
}
</script>
