import * as at from './authConstants'

const initialState = {
  error: '',
  token: '',
  isLoginPending: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case at.LOGIN_REQUEST:
      return ({
        ...state,
        isLoginPending: true
      });
    case at.LOGIN_ERROR:
      return ({
        ...state,
        error: action.payload.error,
        isLoginPending: false
      });
    case at.LOGIN_SUCCESS:
      return ({
        ...state,
        isLoginPending: false,
        token: action.payload.token,
        error: ''
      });
    case at.LOGOUT_SUCCESS:
      return ({
        ...state,
        token: ''
      });
    case at.LOGOUT:
    default:
      return state
  }
}