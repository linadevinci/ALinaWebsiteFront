// import SignUp from './components/SignUp.vue';
// import SignIn from './components/SignIn.vue';
// import App from './App.vue'

// import { createRouter, createWebHistory } from "vue-router"
// import { ref, computed, createApp } from 'vue'
// import 'uno.css'
// import '@una-ui/preset/una.css'

// const routes = [
//   {
//     name: 'Home',
//     path: '/',
//     redirect: '/signin'
//   },
//   {
//     name: 'SignIn',
//     path: '/signin',
//     component: SignIn
//   },
//   {
//     name: 'SignUp',
//     path: '/signup',
//     component: SignUp
//   },
// ]

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// })

// createApp(App)
//   .use(router)
//   .mount('#app')

// const radioButtons = document.querySelectorAll('[name="formType"]')

// function displayAppropriateForm (event) {
//   if (event.target.checked) {
//     if (event.target.value === 'signin') {
//       signupFormEl.style.display = 'none'
//       signinFormEl.style.display = ''
//       return
//     }
//     signinFormEl.style.display = 'none'
//     signupFormEl.style.display = ''
//   }
// }

// for (const radioButton of radioButtons) {
//   radioButton.addEventListener('change', displayAppropriateForm)
// }

// const signupFormEl = document.querySelector('#signup')
// const signinFormEl = document.querySelector('#signin')

// if (signupFormEl) {
//   signupFormEl.addEventListener('submit', signUp)
// }

// if (signinFormEl) {
//   signinFormEl.addEventListener('submit', signIn)
// }



import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import SignUp from './components/SignUp.vue'
import SignIn from './components/SignIn.vue'
import Dashboard from './components/Dashboard.vue'
import LandingPage from './components/LandingPage.vue'

function isAuthenticated() {
  return !!localStorage.getItem('authUsername')
}

const routes = [
  { name: 'Landing', path: '/', component: LandingPage },
  { name: 'SignIn', path: '/signin', component: SignIn, meta: { requiresGuest: true } },
  { name: 'SignUp', path: '/signup', component: SignUp, meta: { requiresGuest: true } },
  { name: 'Dashboard', path: '/dashboard', component: Dashboard, meta: { requiresAuth: true } }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated()) {
    next({ path: '/signin' })
  } else if (to.meta.requiresGuest && isAuthenticated()) {
    next({ path: '/dashboard' })
  } else {
    next()
  }
})

createApp(App).use(router).mount('#app')
