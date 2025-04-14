import { postJSON } from './api-client/api-client.js'

export async function signUp(event) {
  event.preventDefault()

  const usernameEl = document.querySelector('#username')
  const emailEl = document.querySelector('#email')
  const passwordEl = document.querySelector('#password')

  const username = usernameEl.value
  const email = emailEl.value
  const password = passwordEl.value

  try {
    // Étape 1 : création du compte
    const res = await postJSON('/api/users', {
      username,
      email,
      password
    })

    if (res.error) {
      alert(res.error)
      return
    }

    // Étape 2 : login automatique
    const loginRes = await postJSON('/api/token', {
      username,
      password
    })

    if (loginRes.error) {
      alert(loginRes.error)
      return
    }

    localStorage.setItem('authUsername', username)
    localStorage.setItem('authMessage', loginRes.message)
    localStorage.setItem('authQuote', JSON.stringify(loginRes.quote))

    // Étape 3 : redirection vers dashboard
    window.location.href = '/dashboard'

  } catch (err) {
    console.error('Erreur lors de l’inscription :', err)
    alert("Erreur lors de l’inscription")
  }
}
