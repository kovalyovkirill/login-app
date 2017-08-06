import {connect} from 'react-redux'
import Login from './../components/Login'
import {loginRequest} from "../../auth/authActions"

const mapDispatchToProps = dispatch => ({
  doLogin: (username, password) => dispatch(loginRequest(username, password))
});

const mapStateToProps = state => ({
  error: state.authReducer.error,
  isLoginPending: state.authReducer.isLoginPending
});

export default connect(mapStateToProps, mapDispatchToProps)(Login)