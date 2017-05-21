import { GAME_START } from './types'

export const gameStart = (goBack) => async (dispatch, getState) => {
  await dispatch({ type: GAME_START })
  goBack()
}
