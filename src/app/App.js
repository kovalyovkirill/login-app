import React, {Component} from 'react'
import DashboardContainer from './dashboard/containers/DashboardContainer'
import {Switch, Route, Redirect} from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/dashboard" component={DashboardContainer}/>
        <Redirect to="/dashboard"/>
      </Switch>
    )
  }
}