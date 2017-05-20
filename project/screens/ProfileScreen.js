import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default class ProfileScreen extends Component {
  static navigationOptions = {
    title: "Profile",
    tabBarIcon: ({ tintColor, focused }) =>
      <Ionicons name={`ios-contact${focused ? '' : '-outline'}`} color={tintColor} size={30} />
  }
  state = {}
  render () {
    return (
      <View style={styles.container}>
        <Text>
          ProfileScreen
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