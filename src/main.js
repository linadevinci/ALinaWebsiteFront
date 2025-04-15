import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import SignUp from './components/SignUp.vue'
import SignIn from './components/SignIn.vue'
import Dashboard from './components/Dashboard.vue'
import LandingPage from './components/LandingPage.vue'

// Fonction pour vérifier si l'utilisateur est authentifié
function isAuthenticated() {
  return !!localStorage.getItem('authUsername')
}

// Configuration des routes
const routes = [
  { 
    name: 'Landing', 
    path: '/', 
    component: LandingPage, 
    meta: { requiresGuest: true } 
  },
  { 
    name: 'SignIn', 
    path: '/signin', 
    component: SignIn, 
    meta: { requiresGuest: true } 
  },
  { 
    name: 'SignUp', 
    path: '/signup', 
    component: SignUp, 
    meta: { requiresGuest: true } 
  },
  { 
    name: 'Dashboard', 
    path: '/dashboard', 
    component: Dashboard, 
    meta: { requiresAuth: true } 
  }
]

// Création du routeur
const router = createRouter({
  history: createWebHistory(),
  routes
})

// Navigation guard pour la protection des routes
router.beforeEach((to, from, next) => {
  // Si la route nécessite une authentification et l'utilisateur n'est pas connecté
  if (to.meta.requiresAuth && !isAuthenticated()) {
    next({ path: '/signin' })
  } 
  // Si la route est pour les visiteurs et l'utilisateur est connecté
  else if (to.meta.requiresGuest && isAuthenticated()) {
    next({ path: '/dashboard' })
  } 
  // Dans tous les autres cas, autoriser la navigation
  else {
    next()
  }
})

// Création et montage de l'application
createApp(App)
  .use(router)
  .mount('#app')