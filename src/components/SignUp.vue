<template>
  <div class="signup-container">
    <div v-if="accountCreated" class="success-card">
      <div class="success-icon">✓</div>
      <h2>Compte créé avec succès !</h2>
      <p>Votre compte a été créé avec succès. Vous pouvez maintenant vous connecter.</p>
      <router-link to="/signin" class="btn-login">Se connecter</router-link>
    </div>
    
    <div v-else class="signup-card">
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
        
        <button type="submit" class="btn-submit" :disabled="isSubmitting">
          {{ isSubmitting ? 'Création en cours...' : 'Créer mon compte' }}
        </button>
      </form>
      
      <div v-if="errorMessage" class="error-message">
        {{ errorMessage }}
      </div>
      
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
const isSubmitting = ref(false)
const errorMessage = ref('')
const accountCreated = ref(false)

async function handleSubmit() {
  if (isSubmitting.value) return;
  
  errorMessage.value = '';
  isSubmitting.value = true;
  
  try {
    console.log("Envoi de la demande d'inscription:", {
      username: username.value,
      email: email.value,
      password: "••••••••" // Ne pas afficher le mot de passe
    });
    
    const res = await postJSON('/api/users', {
      username: username.value,
      email: email.value,
      password: password.value
    });
    
    console.log("Réponse d'inscription:", res);

    if (res.error) {
      errorMessage.value = res.error;
      return;
    }

    // Si la création du compte a réussi, afficher le message de succès
    accountCreated.value = true;
    
    // Optionnel: redirection automatique après un délai
    // setTimeout(() => {
    //   window.location.href = '/signin';
    // }, 3000);
    
  } catch (err) {
    console.error("Détails de l'erreur d'inscription:", err);
    errorMessage.value = "Erreur lors de l'inscription: " + (err.message || 'Erreur inconnue');
  } finally {
    isSubmitting.value = false;
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

.signup-card, .success-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.success-card {
  text-align: center;
  padding: 3rem 2rem;
}

.success-icon {
  background: #4CAF50;
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin: 0 auto 1.5rem;
}

h2 {
  color: #333;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  text-align: center;
}

.success-card p {
  color: #666;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  line-height: 1.5;
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

.btn-submit:hover:not(:disabled) {
  background: linear-gradient(to right, #6bc0f0, #b08df2);
}

.btn-submit:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.btn-login {
  background: linear-gradient(to right, #84d4fd, #c2a0ff);
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
}

.btn-login:hover {
  background: linear-gradient(to right, #6bc0f0, #b08df2);
  transform: translateY(-2px);
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

.error-message {
  background-color: #ffebee;
  color: #c62828;
  padding: 0.8rem;
  border-radius: 6px;
  margin-top: 1rem;
  font-size: 0.9rem;
  text-align: center;
}
</style>