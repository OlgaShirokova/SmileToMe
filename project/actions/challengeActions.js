import { CHALLENGE_START } from './types'

export const challengeStart = () => async (dispatch, getState) => {
  const state = getState()
  const authUid = '0' // TODO change
  let contactUID = Object.values(state.users).filter(({uid}) => uid !== authUid )[0].uid


  return dispatch({ type: CHALLENGE_START, payload: 11 })
}





/*
  -grab the other user
  -query firebase: sendChallenge([uid]) //
  -wait for response ....... // activity indicador
  -if it fails nx2

*/