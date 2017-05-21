import {  WIN_CHALLENGE, DECLINE_CHALLENGE, TIMEOUT_CHALLENGE } from '../actions/types'

const initialState = null


export default function (state = initialState, action) {
  switch (action.type) {
    case WIN_CHALLENGE:
      return 'You win!! +10 points'
    case DECLINE_CHALLENGE:
      return 'Nobody wants to play. Try Later'
    case TIMEOUT_CHALLENGE:
      return 'You lose'
    default:
      return state
  }
}