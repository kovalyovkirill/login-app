import * as at from './loginConstants'

export function loginRequest(username, password) {
  return ({
    type: at.LOGIN_REQUEST,
    payload: {
      username,
      password
    }
  })
}

export function loginSuccess(token) {
  return ({
    type: at.LOGIN_SUCCESS,
    payload: {
      token
    }
  })
}

export function loginError (error) {
  return ({
    type: at.LOGIN_ERROR,
    payload: {
      error
    }
  })
}