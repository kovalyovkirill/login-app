import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'

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

    const { doLogin } = this.props;

    doLogin(this.state.username, this.state.password)
  };

  render() {
    const { error, isLoginPending } = this.props;
    const token = localStorage.getItem('token');

    return (
      <div>
        { token && <Redirect to='/'/> }
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username: </label>
          <input type="text" id="username" onChange={this.handleChange} name='username' value={this.state.username}/>
          <label htmlFor="password">Password: </label>
          <input id="password" type="password" onChange={this.handleChange} name='password' value={this.state.password}/>
          <input type="submit"  value={isLoginPending ? 'Login in...' : 'Login' } disabled={ isLoginPending }/>
          { error && <div>{error}</div> }
        </form>
      </div>
    )
  }
}