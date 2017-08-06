import { fork } from 'redux-saga/effects'
import authSaga from './auth/authSaga';

export default function* rootSaga() {
  yield fork(authSaga)
}