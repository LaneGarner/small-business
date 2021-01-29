import { combineReducers } from 'redux'

const user = (state = null) => state

const listings = (state = []) => state

const map = (state = []) => state

export default combineReducers({ user, listings, map })