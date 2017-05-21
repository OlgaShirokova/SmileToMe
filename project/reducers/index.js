import { combineReducers } from 'redux'
import users from './usersReducer'
import auth from './authReducer'
import challenge from './challengeReducer'
import game from './gameReducer'

export default combineReducers({
  users,
  auth,
  challenge,
  game
})