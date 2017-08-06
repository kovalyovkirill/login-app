import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {Redirect} from 'react-router-dom'

export default class Login extends PureComponent {
  static propTypes = {
    doLogin: PropTypes.func.isRequired,
    isLoginPending: PropTypes.bool.isRequired,
    error: PropTypes.string
  };

  static defaultProps = {
    error: ''
  };

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const {doLogin} = this.props;

    doLogin(this.state.username, this.state.password)
  };

  render() {
    const {error, isLoginPending} = this.props;
    const token = localStorage.getItem('token');
    const isInvalid = !this.state.username.trim() || !this.state.password.trim();
    const styles = {
      margin: 10,
      padding: 5
    };

    return token
      ?
      <Redirect to='/dashboard'/>
      :
      (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="username">Username: </label>
            <input style={styles} type="text" id="username" onChange={this.handleChange} name='username' value={this.state.username}/><br/>
            <label htmlFor="password">Password: </label>
            <input style={styles} id="password" type="password" onChange={this.handleChange} name='password'
                   value={this.state.password}/><br/>
            <input type="submit" value={isLoginPending ? 'Login in...' : 'Login'} disabled={isInvalid || isLoginPending}/>
            {error && <div>{error}</div>}
          </form><br/>
          <div>Type username: test, password: 123 to log in.</div>
        </div>
      )
  }
}