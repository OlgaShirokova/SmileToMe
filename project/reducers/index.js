import { combineReducers } from 'redux'
import users from './usersReducer'
import auth from './authReducer'
import challenge from './challengeReducer'

export default combineReducers({
  users,
  auth,
  challenge
})