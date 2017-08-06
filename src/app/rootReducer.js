import {combineReducers} from 'redux'
import authReducer from './auth/authReducer'
import {routerReducer} from 'react-router-redux'

export default combineReducers({
  authReducer,
  routing: routerReducer
})