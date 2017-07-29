import { connect } from 'react-redux'
import Login from './../components/Login'
import { loginRequest } from "../loginActions"

const mapDispatchToProps = dispatch => ({
  doLogin: (username, password) => dispatch(loginRequest(username, password))
});

const mapStateToProps = state => {
  console.log(state);

  return ({
    error: state.loginReducer.error,
    isLoginPending: state.loginReducer.isLoginPending
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(Login)