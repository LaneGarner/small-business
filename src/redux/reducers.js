import { combineReducers } from 'redux'

// const user = (state = null) => state

// const loggedIn = (state = null, action) => {
//     switch(action.type) {
//         case 'LOG_IN':
//             return action.value
//         default:
//             return state
//     }
// }

const user = (state = null, action) => {
    switch (action.type) {
    case "LOG_IN":
        console.log(action.value)
        return action.value;
    default:
        return state;
    }
};

// const listings = (state = []) => state

const listings = (state = [], action) => {
    switch(action.type) {
        case 'ADD_LISTING':
            return[...state, action.value]
        case 'REMOVE_LISTING':
            const newState = [...state]
            newState.splice(action.value, 1)
            return newState
        default: return state
        }
}

// const loggedIn = (state = []) => state

const map = (state = []) => state

export default combineReducers({ user, listings, map })