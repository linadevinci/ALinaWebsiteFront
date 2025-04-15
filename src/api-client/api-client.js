import config from '../config.js';
const baseURL = import.meta.env.VITE_API_URL || config.apiBaseURL;
//const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export async function postJSON(path, data) {
  const res = await fetch(`${baseURL}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  return await res.json()
}

export async function getJSON(path) {
  const res = await fetch(`${baseURL}${path}`)
  return await res.json()
}

export async function getQuote() {
  const res = await fetch(`${baseURL}/api/quote`);
  if (!res.ok) throw new Error('Erreur lors de la récupération de la citation');
  return await res.json();
}
