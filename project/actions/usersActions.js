import { GET_USERS } from './types'

const mockData = {
  '0': {
    uid: '0',
    name: 'Eric Ruiz',
    description: 'Basketball Fan',
    points: 900,
    avatarURL: 'https://avatars1.githubusercontent.com/u/1191816?v=3&s=400',
    coords: {
      latitude: 37.78825,
      longitude: -122.4324,
    }
  },
  '1': {
    uid: '1',
    name: 'Salman Lalal',
    description: 'Futbon Fan',
    points: 300,
    avatarURL: 'https://avatars2.githubusercontent.com/u/292714?v=3&s=400',
    coords: {
      latitude: 37.78425,
      longitude: -122.4624,
    }
  },
}


export const getUsers = () => async dispatch => {
  const users = await mockData
  dispatch({ type: GET_USERS, users })
}

/*latitude: 37.78825,
          longitude: -122.4324,
  users
    [uid]
      name
      description
      points
      avatarURL
      coords
        latitud
        longitud

*/