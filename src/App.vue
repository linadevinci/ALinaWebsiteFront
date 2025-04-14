<!-- <script lang="ts" setup>
import { RouterView } from 'vue-router';

import AppHeader from './components/AppHeader.vue';
</script>

<template>
  <AppHeader />
  <main>
    <header>
      <RouterLink to="/signin">Sign in</RouterLink>
      <RouterLink to="/signup">Sign up</RouterLink>
    </header>
    <RouterView />
  </main>
</template> -->

<!-- <template>
  <router-view />
</template>

<script setup>
</script> -->


<template>
  <div class="container">
    <header class="navbar">
      <h1 class="logo">Inspiration du jour</h1>
      <div class="nav-buttons">
        <button class="btn-outline">Connexion</button>
        <button class="btn-filled">Créer un compte</button>
      </div>
    </header>

    <main class="content">
      <div class="text-zone">
        <h2>Commence ta journée<br />avec de l'inspiration</h2>
        <p>
          Découvre une citation motivante pour te donner l'élan nécessaire aujourd'hui.
        </p>
        <button class="btn-main">C'est parti !</button>
      </div>

      <div class="quote-box" v-if="quote">
        <p class="quote">"{{ quote.text }}"</p>
        <p class="author">— {{ quote.author }}</p>
      </div>
      <p v-else-if="error" class="quote">{{ error }}</p>
      <p v-else class="quote">Chargement de la citation...</p>

    </main>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.container {
  font-family: 'Segoe UI', sans-serif;
  background: linear-gradient(to right, #84d4fd, #c2a0ff);
  color: #333;
  min-height: 100vh;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.2);
  padding: 1.5rem 3rem;
  backdrop-filter: blur(10px);
}

.logo {
  font-size: 2rem;
  font-weight: bold;
  color: white;
}

.nav-buttons button {
  margin-left: 1rem;
  font-size: 1rem;
}

.btn-outline {
  padding: 0.6rem 1.2rem;
  background: transparent;
  border: 2px solid white;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.btn-outline:hover {
  background: white;
  color: #84d4fd;
}

.btn-filled {
  padding: 0.6rem 1.2rem;
  background: white;
  border: none;
  color: #84d4fd;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
}

.btn-filled:hover {
  background: #dff4ff;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 2rem;
  text-align: center;
}

.text-zone h2 {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: white;
}

.text-zone p {
  font-size: 1.3rem;
  margin-bottom: 2rem;
  color: white;
}

.btn-main {
  padding: 1rem 2rem;
  background: white;
  border: none;
  border-radius: 8px;
  color: #84d4fd;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
}

.btn-main:hover {
  background: #dff4ff;
}

.quote-box {
  background: white;
  padding: 2rem;
  margin-top: 4rem;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  text-align: center;
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
</style>
<script>
import { onMounted, ref } from 'vue';
import { getQuote } from './api-client/api-client.js';

export default {
  name: "Home",
  setup() {
    const quote = ref(null);
    const error = ref(null);

    onMounted(async () => {
      try {
        quote.value = await getQuote();
      } catch (err) {
        error.value = "Impossible de récupérer la citation.";
        console.error(err);
      }
    });

    return { quote, error };
  }
};
</script>


