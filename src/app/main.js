import React, { PureComponent } from 'react'
import { Switch, Route } from 'react-router-dom'
import LoginContainer from './login/containers/LoginContainer'

export default class App extends PureComponent {
  render() {
    return (
      <Switch>
        <Route to='/login' component={ LoginContainer }/>
      </Switch>
    )
  }
}