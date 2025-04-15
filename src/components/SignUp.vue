<template>
  <div class="signup-container">
    <div class="signup-card">
      <h2>Créer un compte</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="username">Nom d'utilisateur</label>
          <input 
            id="username"
            v-model="username" 
            placeholder="Choisissez un nom d'utilisateur" 
            required 
          />
        </div>
        
        <div class="form-group">
          <label for="email">Adresse email</label>
          <input 
            id="email"
            v-model="email" 
            type="email" 
            placeholder="Votre adresse email" 
            required 
          />
        </div>
        
        <div class="form-group">
          <label for="password">Mot de passe</label>
          <input 
            id="password"
            v-model="password" 
            type="password" 
            placeholder="Choisissez un mot de passe" 
            required 
          />
        </div>
        
        <button type="submit" class="btn-submit">Créer mon compte</button>
      </form>
      
      <div class="form-footer">
        <p>Déjà un compte ?</p>
        <router-link to="/signin">Se connecter</router-link>
      </div>
    </div>
  </div>
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

<style scoped>
.signup-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
}

.signup-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #333;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  text-align: center;
}

.form-group {
  margin-bottom: 1.2rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: #555;
  font-weight: 500;
  text-align: left;
}

input {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
}

input:focus {
  outline: none;
  border-color: #84d4fd;
}

.btn-submit {
  width: 100%;
  background: linear-gradient(to right, #84d4fd, #c2a0ff);
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.8rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: 1rem;
}

.btn-submit:hover {
  background: linear-gradient(to right, #6bc0f0, #b08df2);
}

.form-footer {
  margin-top: 1.5rem;
  text-align: center;
}

.form-footer p {
  color: #666;
  margin-bottom: 0.5rem;
}

.form-footer a {
  color: #84d4fd;
  text-decoration: none;
  font-weight: 500;
}

.form-footer a:hover {
  text-decoration: underline;
}
</style>