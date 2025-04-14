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
      <h1 class="logo">Daily Inspiration</h1>
      <div class="nav-buttons">
        <button class="btn-outline">Sign In</button>
        <button class="btn-filled">Sign Up</button>
      </div>
    </header>

    <main class="content">
      <div class="text-zone">
        <h2>Start Your Day With <br />Inspiration</h2>
        <p>
          Access a collection of motivational quotes to lift your spirits and brighten your day.
        </p>
        <button class="btn-main">Get Started</button>
      </div>

      <div class="quote-box">
        <p class="quote">"The best way to predict the future is to create it."</p>
        <p class="author">— Abraham Lincoln</p>
      </div>
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
  background: #ffffff;
  color: #333;
  min-height: 100vh;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #84d4fd;
  padding: 1rem 2rem;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
}

.nav-buttons button {
  margin-left: 0.5rem;
}

.btn-outline {
  padding: 0.5rem 1rem;
  background: transparent;
  border: 2px solid white;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.btn-outline:hover {
  background: white;
  color: #84d4fd;
}

.btn-filled {
  padding: 0.5rem 1rem;
  background: white;
  border: none;
  color: #84d4fd;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.2s ease-in-out;
}

.btn-filled:hover {
  background: #dff4ff;
}

.content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 4rem 2rem;
  flex-wrap: wrap;
}

.text-zone {
  max-width: 500px;
}

.text-zone h2 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.text-zone p {
  font-size: 1.1rem;
  margin-bottom: 2rem;
}

.btn-main {
  padding: 0.75rem 1.5rem;
  background: #84d4fd;
  border: none;
  border-radius: 6px;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
}

.btn-main:hover {
  background: #61c0f8;
}

.quote-box {
  background: #f5f5f5;
  padding: 1.5rem;
  margin-top: 1rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 350px;
}

.quote {
  font-style: italic;
  font-size: 1.1rem;
}

.author {
  text-align: right;
  margin-top: 0.5rem;
  font-weight: bold;
}
</style>

