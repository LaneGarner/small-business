import { connect } from 'react-redux'
import { Navigation } from '../components/Navigation'
import { logIn } from '../redux/actions'

// import { removeCar } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        user: state.user,
        listings: state.listings,
        loggedIn: state.loggedIn,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    logIn: (user) => dispatch(logIn(user)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)