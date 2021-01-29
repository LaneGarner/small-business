import { connect } from 'react-redux'
import { Listings } from '../components/Listings'
// import { removeCar } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        user: state.user,
        listings: state.listings,
    }
}

// add mapDispatchToProps function here
// const mapDispatchToProps = (dispatch) => {
//     return {
//         removeCar: (index) => dispatch(removeCar(index))
//     }
// }

export default connect(mapStateToProps, null)(Listings)