import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default class Timer extends Component {
  state = {
    sec: null,
    min: null
  }
  componentDidMount() {
    let secStart = 59;
    let minStart = 4;
    setInterval( () => {

      if (this.state.sec === 1){
        minStart--;
        secStart = 59;
        this.setState({
          sec: secStart,
          min: minStart
        })
      } else {
        secStart--;
        this.setState({
          sec : secStart,
          min: minStart
        })
      }
    },1000)
  }
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.containerTimer}>
          <Text style={styles.numbers}>{this.state.min} : {this.state.sec}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 60,
    backgroundColor: 'transparent'
  },
  containerTimer: {
    padding: 10,
    borderRadius: 50,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#ff5a60',
  },
  numbers: {
    color: '#ff5a60',
    fontFamily: "Trebuchet MS",
    fontSize: 30
  }
})