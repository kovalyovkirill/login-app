import fetch from 'isomorphic-fetch'
import axios from 'axios'

//TODO: Разобраться с возвращением ошибок

export function login(username, password) {
  return axios.post('http://localhost:3030/login', {
    username,
    password
  }).then(res => {
    console.log('resolve');
    return res;
  })
}

export function logout() {
  return fetch('http://localhost:3030/logout', {
    method: 'POST'
  })
}

