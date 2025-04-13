// export function postJSON (url, data) {
//   return fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data)
//   })
// }

import config from './config.js'

export async function postJSON(path, data) {
  const res = await fetch(`${config.apiBaseURL}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  return res.json()
}

export async function getJSON(path) {
  const res = await fetch(`${config.apiBaseURL}${path}`)
  return res.json()
}
