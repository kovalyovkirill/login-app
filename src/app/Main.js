import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import LoginContainer from './login/containers/LoginContainer'
import App from './App'

export default class Main extends Component {
  render() {
    return (
      <Switch>
        <Route path='/login' component={ LoginContainer }/>
        <Route path='/' component={ App }/>
      </Switch>
    )
  }
}