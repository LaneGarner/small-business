import { connect } from 'react-redux'
import { Details } from '../components/Details'
// import { removeCar } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        user: state.user,
        listings: state.listings,
        loggedIn: state.loggedIn,
    }
}

// add mapDispatchToProps function here
// const mapDispatchToProps = (dispatch) => {
//     return {
//         removeCar: (index) => dispatch(removeCar(index))
//     }
// }

export default connect(mapStateToProps, null)(Details)