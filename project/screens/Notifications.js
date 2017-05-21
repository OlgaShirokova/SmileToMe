import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default class Timer extends Component {
  state = {
    texto: "Congratulations ! You've earned 50 points !",
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.containerNotification}>
          <Text style={styles.textInside}>{this.state.texto}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 200,
  },
  containerNotification: {
    padding: 10,
    borderRadius: 50,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#ff5a60',
    backgroundColor: '#ff5a60'
  },
  textInside: {
    color: 'white',
    fontFamily: "GillSans",
    fontSize: 19
  }
})
