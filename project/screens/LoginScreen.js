import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export default class LoginScreen extends Component {
  static propTypes = {}
  state = {}

  _handleLoginFb = async () => {
    console.warn(JSON.stringify(2))
  }

  render () {
    return (
      <View style={styles.container}>
        <Button onPress={this._handleLoginFb} title="aa" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})


// 1993780664185469