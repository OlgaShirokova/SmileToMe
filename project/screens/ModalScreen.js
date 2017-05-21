import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import Button from '../components/Button'
import * as actions from '../actions'
import { connect } from 'react-redux'

class ModalScreen extends Component {
  static navigationOptions = {
    header: null
  }

  state = {}


  _renderDefaultModal () {
    return (
      <View style={styles.container}>
        <View style={styles.modalContainer}>
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            style={styles.closeBtnContainer}><Entypo name="cross" size={38} color="#FF585B" style={styles.closeBtn} /></TouchableOpacity>
        </View>
      </View>
    )
  }

  _handleAcceptChallenge = () => {
    this.props.declineChallenge()
  }

  _handleDeclineChallenge = () => {
    this.props.timeoutChallenge()
  }


  _renderChallengeModal () {
    return (
      <View style={styles.container}>
        <View style={styles.modalContainer}>
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            style={styles.closeBtnContainer}><Entypo name="cross" size={38} color="#FF585B" style={styles.closeBtn} /></TouchableOpacity>
            <Button title="Accept" style={styles.btnn} onPress={this._handleAcceptChallenge} onPr/>
            <Button title="Decline" backgroundColor="black" style={styles.btnn} onPress={this._handleDeclineChallenge} />
        </View>
      </View>
    )
  }

  render () {
    return this._renderChallengeModal()
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEFF4',
  },
  modalContainer: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'gray',
    marginHorizontal: 16,
    marginVertical: 60,
    alignItems: 'center',
  },
  closeBtnContainer: {
    flexDirection: 'column',
    backgroundColor: 'transparent',
    alignSelf: 'stretch',
    flex: 1,
  },
  closeBtn: {
    backgroundColor: 'transparent',
    margin: 4,
    alignSelf: 'flex-start',
  },
  btnn: {
    marginBottom: 20,
  }
})


export default connect(null, actions)(ModalScreen)