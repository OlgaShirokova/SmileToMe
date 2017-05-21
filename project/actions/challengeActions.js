import firebase from 'firebase'
import { CHALLENGE_START, DECLINE_CHALLENGE, TIMEOUT_CHALLENGE } from './types'

export const acceptChallenge = () => async (dispatch, getState) => {
  //put an activeChallenge in all the contacts { startedAt: date.now(), peer: [un dels dos uid], message: [random message ] }
  const state = getState()
  const authUid = getState().auth.authedUID // TODO change
  let contactUID = Object.values(state.users).filter(({uid}) => uid !== authUid )[0].uid

  firebase.database().ref(`user/${authUid}`).update({ activeChallenge: {} })
  firebase.database().ref(`user/${contactUID}`).update({ activeChallenge: {} })
}

export const declineChallenge = () => async (dispatch, getState) => {
  const state =  getState()

  const authUid = state.auth.authedUID

  const peerUid = Object.values(state.users).filter(({uid}) => uid !== authUid )[0].uid
  console.log(`user/${authUid}/challenge`)
  console.log(`user/${peerUid}/challenge`)


  const a = firebase.database().ref(`user/${authUid}/challenge`).update({
    requestMade: null,
    requestReceived: null,
    activeChallenge: null,
  })

  const b = firebase.database().ref(`user/${peerUid}/challenge`).update({
    requestMade: null,
    requestReceived: null,
    activeChallenge: null,
  })

  await Promise.all([a, b])

  dispatch({ type: DECLINE_CHALLENGE })
}

export const timeoutChallenge = () => async (dispatch, getState) => {
  const state =  getState()

  const authUid = state.auth.authedUID

  const peerUid = Object.values(state.users).filter(({uid}) => uid !== authUid )[0].uid

  const a = firebase.database.ref(`user/${authUid}/challenge`).update({
    requestMade: null,
    requestReceived: null,
    activeChallenge: null,
  })

  const b = firebase.database.ref(`user/${peerUid}/challenge`).update({
    requestMade: null,
    requestReceived: null,
    activeChallenge: null,
  })

  await Promise.all([a, b])

  dispatch({ type: TIMEOUT_CHALLENGE })


}


export const challengeStart = () => async (dispatch, getState) => {
  const state = getState()
  const authUid = getState().auth.authedUID // TODO change
  let contactUID = Object.values(state.users).filter(({uid}) => uid !== authUid )[0].uid

  const contactChallenge = getState().users[contactUID].challenge
  const challenge = getState().users[authUid].challenge
  // await sendChallenge({ contactUID, contactChallenge, authUid, challenge })
  await sendChallenge(getState().users)

  return dispatch({ type: CHALLENGE_START, payload: 11 })
}


// async function sendChallenge ({ contactUID, contactChallenge, challenge, authUid }) {
  async function sendChallenge (users) {
  const contactP = { ...contactChallenge, requestReceived: authUid }
  const userP = { ...challenge, requestMade: authUid }

  await firebase.database()
  .ref('users/')
  .update(users)
}
/*
challenge
  requestsMade: null || [uid]
  requestReceived: null || [uid]
  activeChallenge: null || { startedAt: [timestamp], peer: [uid], message: [random message] }

*/


/*
  when i receive updates i check if i have the properti requestReceived set and show a modal

*/



/*
  -grab the other user
  -query firebase: sendChallenge([uid]) //  set ( uid on the requestReceived of the peer)
  -wait for response ....... // activity indicador (requestMade !== null)

  -if it fails nx2

*/
/*

challenge
  requestsMade: null || [uid]
  requestReceived: null || [uid]
  activeChallenge: null || { startedAt: [timestamp], peer: [uid], message: [random message] }

    -cacel:
      delete requestReceived from my state and delete requestMade from the other user

    -accept:
      put an activeChallenge in all the contacts { startedAt: date.now(), peer: [un dels dos uid], message: [random message ] }

      apareteix un inputbox en els dos users

      quan entru coses al input box i clicku al boto validate comparu amb el missatge del colega i si és igual acaba el challenges i guaño punts


    -timeout si el timeout acabaa missatge tots perduts


*/