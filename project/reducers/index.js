import { combineReducers } from 'redux'
import users from './usersReducer'
import auth from './authReducer'
import challenge from './challengeReducer'
import game from './gameReducer'

// export default combineReducers({
//   users,
//   auth,
//   challenge,
//   game
// })


const reducer = combineReducers({
  users,
  auth,
  challenge,
  game
})

export default function (state, action) {
  if (action.type === 'LOGOUT') {
    state = undefined
  }
  return reducer(state, action)
}