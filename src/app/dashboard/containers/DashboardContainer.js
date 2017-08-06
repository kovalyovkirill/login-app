import {connect} from 'react-redux'
import Dashboard from '../components/Dashboard'
import {logout} from '../../auth/authActions'

const mapDispatchToProps = dispatch => ({
  doLogout: () => dispatch(logout())
});

const mapStateToProps = state => ({
  token: state.authReducer.token
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)