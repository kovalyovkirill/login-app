import * as at from './authConstants'

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

export function loginError(error) {
  return ({
    type: at.LOGIN_ERROR,
    payload: {
      error
    }
  })
}

export function logout() {
  return ({
    type: at.LOGOUT
  })
}

export const logoutSuccess = () => ({type: at.LOGOUT_SUCCESS});