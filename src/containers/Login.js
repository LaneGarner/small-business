import { connect } from 'react-redux'
import Login from '../components/Login'
import { logIn } from '../redux/actions'
import { bindActionCreators } from 'redux'


const mapStateToProps = (state) => {
    return {
        user: state.user,
        listings: state.listings,
        loggedIn: state.loggedIn,
    }
}

// add mapDispatchToProps function here
// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({ logIn }, dispatch)
// }

const mapDispatchToProps = (dispatch) => {
    return {
    logIn: (user) => dispatch(logIn(user)),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Login)