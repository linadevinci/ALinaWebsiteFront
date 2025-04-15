<template>
  <div class="landing">
    <div class="text-zone">
      <h2>Commence ta journée<br />avec de l'inspiration</h2>
      <p>
        Découvre une citation motivante pour te donner l'élan nécessaire aujourd'hui.
      </p>
      <div class="cta-buttons">
        <router-link to="/signin" class="btn-main">Se connecter</router-link>
        <router-link to="/signup" class="btn-alt">Créer un compte</router-link>
      </div>
    </div>
  </div>
</template>
  
<script setup></script>
  
<style scoped>
.landing {
  text-align: center;
  margin-top: 2rem;
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

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
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
  text-decoration: none;
}

.btn-main:hover {
  background: #dff4ff;
}

.btn-alt {
  padding: 1rem 2rem;
  background: transparent;
  border: 2px solid white;
  border-radius: 8px;
  color: white;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
}

.btn-alt:hover {
  background: rgba(255, 255, 255, 0.1);
}
</style>