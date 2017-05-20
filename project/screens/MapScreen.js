import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons'

export default class MapScreen extends Component {
  static navigationOptions = {
    title: "Explore",
    tabBarIcon: ({ tintColor, focused }) =>
      <Ionicons name={`ios-locate${focused ? '' : '-outline'}`} color={tintColor} size={30} />
  }

  state = {}
  render () {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => this.props.navigation.navigate('modal')}
        />
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
