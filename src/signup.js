// const usernameEl = document.querySelector('#username')
// const emailEl = document.querySelector('#email')
// const passwordEl = document.querySelector('#password')

// export function signUp (event) {
//   event.preventDefault()
//   const username = usernameEl.value
//   const email = emailEl.value
//   const password = passwordEl.value
  
//   const data = {
//     username,
//     email,
//     password,
//   }

//   fetch('/api/user', {
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

//import { postJSON } from './api-client.js'
import { postJSON } from './api-client/api-client.js'


const usernameEl = document.querySelector('#username')
const emailEl = document.querySelector('#email')
const passwordEl = document.querySelector('#password')

export async function signUp(event) {
  event.preventDefault()

  const username = usernameEl.value
  const email = emailEl.value
  const password = passwordEl.value

  try {
    const res = await postJSON('/api/users', {
      username,
      email,
      password
    })

    if (res.error) {
      alert(res.error)
      return
    }

    alert("Compte créé avec succès !")
    window.location.href = '/signin'
  } catch (err) {
    console.error('Erreur lors de l’inscription :', err)
    alert("Erreur lors de l’inscription")
  }
}
