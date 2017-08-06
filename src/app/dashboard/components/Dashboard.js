import React, {PureComponent} from 'react'
import {Redirect} from 'react-router-dom'
import PropTypes from 'prop-types'

export default class Dashboard extends PureComponent {
  static propTypes = {
    doLogout: PropTypes.func.isRequired,
    token: PropTypes.string.isRequired,
  };

  onClick = () => {
    const {doLogout} = this.props;

    doLogout();
  };

  render() {
    const token = localStorage.getItem('token');

    return token
      ?
      (
        <div>
          Hello dashboard!<br/>
          <button onClick={this.onClick}>Logout</button>
        </div>
      )
      :
      <Redirect to="/login"/>
  }
}