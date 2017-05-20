import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'


export default class PartnersScreen extends Component {
  static navigationOptions = {
    title: "Partners",
    tabBarIcon: ({ tintColor, focused }) =>
      <Ionicons name={`ios-ribbon${focused ? '' : '-outline'}`} color={tintColor} size={30} />
  }
  state = {}
  render () {
    return (
      <View style={styles.container}>
        <Text>
          PartnersScreen
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEFF4'
  }
})
