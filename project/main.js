import Expo from 'expo'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation';
import {
  MapScreen,
  ModalScreen,
  PartnersScreen,
  ProfileScreen,
  LoginScreen
} from './screens'
import { Provider } from 'react-redux'
import store from './store'
import './firebase'
import { connect } from 'react-redux'

class AppContainer extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <ConnectedApp {...this.props} />
      </Provider>
    )
  }
}


class App extends React.Component {
  render() {
    const MainNavigator = StackNavigator({
      main: { screen: TabNavigator({
        map: { screen: MapScreen },
        partners: { screen: PartnersScreen },
        profile: { screen: ProfileScreen },
      }, {
        tabBarOptions: { activeTintColor: '#FF585B', labelStyle: { fontSize: 12 }, style: { backgroundColor: 'white' } }
      })},
      modal: { screen: ModalScreen },
    }, { mode: 'modal', navigationOptions: {
      headerStyle: { backgroundColor: 'white', },
      headerTitleStyle: { color: '#FF585B', fontSize: 20 }

  } })

    return  this.props.uid ? <MainNavigator /> : <LoginScreen />
  }
}


function mapStateToProps ({ auth }) {
  return { uid: auth.authedUID }
}

const ConnectedApp = connect(mapStateToProps)(App)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Expo.registerRootComponent(AppContainer);
