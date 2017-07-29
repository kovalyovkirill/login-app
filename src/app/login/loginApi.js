import fetch from 'isomorphic-fetch'
import axios from 'axios'

export function login(username, password) {
  return axios('http://localhost:3030/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username,
      password
    })
  }).then(res => {
    return res.token
  })
}

export function logout() {
  return fetch('http://localhost:3030/logout', {
    method: 'POST'
  })
}

