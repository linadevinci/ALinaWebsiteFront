<template>
  <form @submit="onSubmit">
    <input id="username" placeholder="Nom d'utilisateur" required />
    <input id="email" type="email" placeholder="Email" required />
    <input id="password" type="password" placeholder="Mot de passe" required />
    <button type="submit">Créer un compte</button>
  </form>
</template>

<script setup>
import { signUp } from '../signup.js'

function onSubmit(event) {
  signUp(event)
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
