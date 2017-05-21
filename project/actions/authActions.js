import { Facebook } from 'expo'
import firebase from 'firebase'
import {
  SIGN_IN,
  SIGN_IN_SUCCESS
} from './types'
import { Constants, Location, Permissions } from 'expo'


export const signIn = () => async dispatch => {
  dispatch({ type: SIGN_IN })
  // await Permissions.askAsync(Permissions.LOCATION); // change location of this code
  const { token, type } = await Facebook.logInWithReadPermissionsAsync('1993780664185469', {})
  if (type !== 'success') return undefined;

  const credential = firebase.auth.FacebookAuthProvider.credential(token);

  const { uid, displayName, photoURL } = await firebase.auth().signInWithCredential(credential);
  let { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync({});




  const user = {
    uid,
    displayName,
    photoURL,
    points: 0,
    description: 'Futbol fan since 1977',
    coords: {
      latitude,
      longitude,
    },
    challenge: {
      requestMade: null,
      requestReceived: null,
      activeChallenge: null,
    }
  }



/*
challenge
  requestsMade: null || [uid]
  requestReceived: null || [uid]
  activeChallenge: null || { startedAt: [timestamp], peer: [uid], message: [random message] }

*/

  await firebase.database()
  .ref(`users/${uid}`)
  .update(user)

  listenerForNewLocation(uid)

  dispatch({ type: SIGN_IN_SUCCESS, uid })
}


function listenerForNewLocation (uid) {
  Location.watchPositionAsync({ enableHighAccuracy: true, distanceInterval: 1 }, ({ coords }) => {

  const { latitude, longitude } = coords
  console.warn(JSON.stringify({latitude, longitude}))
  firebase.database()
  .ref(`users/${uid}`)
  .update({ coords: { latitude, longitude }})

  })
}


