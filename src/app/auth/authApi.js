import axios from 'axios'

export function login(username, password) {
  return axios.post('http://localhost:3030/login', {
    username,
    password
  }).then(res => res)
}

export function logout() {
  return axios.post('http://localhost:3030/logout')
    .then(() => {
      localStorage.removeItem('token');
    })
}

