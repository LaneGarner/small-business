import { connect } from 'react-redux'
import { Add } from '../components/Add'
import { addListing } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        user: state.user,
        listings: state.listings,
        loggedIn: state.loggedIn,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addListing: (index) => dispatch(addListing(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Add)