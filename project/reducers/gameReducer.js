import { GAME_START } from '../actions/types'

export default function (state = false, action) {
  switch (action.type) {
    case GAME_START:
      return true
    default:
      return state
  }
}