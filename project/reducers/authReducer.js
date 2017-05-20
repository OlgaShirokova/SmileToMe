import { SIGN_IN, SIGN_IN_SUCCESS } from '../actions/types'

const initialState = {
  authedUID: null,
  authenticating: false,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SIGN_IN:
      return { ...initialState, authenticating: true }
    case SIGN_IN_SUCCESS:
      return { ...initialState, authedUID: action.uid }

    default:
      return state
  }
}
