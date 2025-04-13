// const usernameEl = document.querySelector('#username')
// const passwordEl = document.querySelector('#password')

// export function signIn (event) {
//   event.preventDefault()
//   const username = usernameEl.value
//   const password = passwordEl.value
  
//   const data = {
//     username,
//     password,
//   }

//   fetch('/api/token', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
//   }).then((res) => {
//     return res.text()
//   }).then((text) => {
//     console.log(text)
//   }).catch(function (error) {
//     console.log('Promise rejected with:', error)
//   })
// }


import { postJSON } from './api-client.js'

const usernameEl = document.querySelector('#username')
const passwordEl = document.querySelector('#password')

export async function signIn(event) {
  event.preventDefault()

  const username = usernameEl.value
  const password = passwordEl.value

  try {
    const res = await postJSON('/api/token', { username, password })

    if (res.error) {
      alert(res.error)
      return
    }

    // Enregistre le token s'il y en a un, ici on garde juste une trace du login
    localStorage.setItem('authUsername', username)
    localStorage.setItem('authMessage', res.message)
    localStorage.setItem('authQuote', JSON.stringify(res.quote))

    window.location.href = '/dashboard'
  } catch (err) {
    console.error('Erreur lors de la connexion :', err)
    alert("Erreur lors de la connexion")
  }
}


