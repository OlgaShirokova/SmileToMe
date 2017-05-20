import { GET_USERS } from '../actions/types'

export default function (state = {}, action) {
  switch (action.type) {
    case GET_USERS:
      return action.users
    default:
      return state
  }
}


/*
  users
    [uid]
      name
      description
      points
      avatarURL
      coords
        latitude
        longitude

*/

