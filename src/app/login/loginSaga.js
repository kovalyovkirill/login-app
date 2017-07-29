import {fork, call, take, put} from 'redux-saga/effects'

import * as api from './loginApi'
import * as at from './loginConstants'
import {loginSuccess, loginError} from './loginActions'

function* authorize(username, password) {
  try {
    console.log('autorize');

    const response = yield call(api.login, username, password);

    console.log(response);

    if (response.status === 200) {
      const {token} = response;

      localStorage.setItem('token', token);
      yield put(loginSuccess(token));
    }
  } catch (error) {
    const errMessage = typeof error === 'string'
      ? error
      : 'Could not connect to server. Please try later.';

    yield put(loginError(errMessage))
  }
}

export default function* loginSaga() {
  while (true) {
    const login = yield take(at.LOGIN_REQUEST);
    const {username, password} = login.payload;

    yield fork(authorize, username, password);
    yield take([at.LOGOUT, at.LOGIN_ERROR]);
  }
}