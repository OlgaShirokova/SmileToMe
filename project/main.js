import Expo from 'expo'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
// import { TabNavigator, StackNavigator } from 'react-navigation';
import {
  MapScreen,
  ModalScreen,
  PartnersScreen,
  ProfileScreen,
  LoginScreen
} from './screens'

class App extends React.Component {
  render() {
  //   const MainNavigator = StackNavigator({
  //     main: { screen: TabNavigator({
  //       map: { screen: MapScreen },
  //       partners: { screen: PartnersScreen },
  //       profile: { screen: ProfileScreen },
  //     }, {
  //       tabBarOptions: { activeTintColor: '#FF585B', labelStyle: { fontSize: 12 }, style: { backgroundColor: 'white' } }
  //     })},
  //     modal: { screen: ModalScreen },
  //   }, { mode: 'modal', navigationOptions: {
  //     headerStyle: { backgroundColor: 'white', },
  //     headerTitleStyle: { color: '#FF585B', fontSize: 20 }
  //
  // } })

    return (
      // <MainNavigator />
      <LoginScreen />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Expo.registerRootComponent(App);
