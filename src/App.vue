<template>
  <div class="container">
    <header class="navbar">
      <h1 class="logo">Inspiration du jour</h1>
      <div class="nav-buttons">
        <router-link to="/signin" class="btn-outline">Connexion</router-link>
        <router-link to="/signup" class="btn-filled">Créer un compte</router-link>
      </div>
    </header>

    <main class="content">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: "App"
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

.nav-buttons a {
  margin-left: 1rem;
  font-size: 1rem;
  text-decoration: none;
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
</style>