import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Constants } from 'expo';
import { Button as RNButton } from 'react-native-elements';

function Button (props) {
  return (
    <RNButton
      color="white"
      {...props}
    />
  )
}

export default class ModalScreen extends Component {
   defaultProps = {
    user: {
      name: 'Julia Valenta',
      avatarURL: 'http://cdn.playbuzz.com/cdn/46174aaf-3486-43fb-97bb-ece8e0f23eaa/df9ad726-bfe2-4722-8262-dd7958034c72.png',
      points: 900,
      description: 'Always go for high fives',
    },
  }

  static navigationOptions = {
    header: null
  }

  state = {}
  render () {
    this.props = this.defaultProps;
    return (
      <Image source={{ uri: 'http://i.imgur.com/wmhtHM0.png' }} style={styles.container}>
        <View style={styles.modalContainer}>
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            style={styles.closeBtnContainer}><Entypo name="cross" size={38} color="#FF585B" style={styles.closeBtn} /></TouchableOpacity>

          <Text style={styles.challenge}>You have a new challenge!</Text>

          <View style={styles.imgView}>
          <Image
            style={styles.img}
            source={{ uri: this.props.user.avatarURL }}
          />
          <Text style={styles.name}> {this.props.user.name} </Text>

        </View>



        <View style={styles.interestsView}>
          <Text style={styles.common}> 4 common interests! </Text>
          <Image
            style={styles.interests}
            source={{ uri: 'http://i.imgur.com/RvmnwRH.png' }}
          />
        </View>

        <View>
          <Button title='Accept Challenge!' buttonStyle={styles.button}></Button>
          <Button title='Try Again' buttonStyle={styles.button1}> </Button>
        </View>

        </View>
      </Image>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: Constants.statusBarHeight,
  },
  modalContainer: {
    backgroundColor: '#EFEFF4',
    flex: 1,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'gray',
    marginHorizontal: 40,
    marginVertical: 60,
    alignSelf: 'stretch',
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
  challenge: {
    color: '#FF2B53',
    margin: 20,
  },
  imgView: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  img: {
    height: 140,
    width: 140,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 70,
  },
  name: {
    margin: 2,
    fontSize: 28,
    fontWeight: 'normal',
    textAlign: 'center',
    color: 'black',
    marginBottom: 5,
  },
  button: {
    backgroundColor:"#FF2B53",
    width: 230,
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 10,
  },
  button1: {
    backgroundColor:"#bdbdbd",
    width: 230,
    borderRadius: 8,
    marginBottom: 40,
  },
  interestsView: {
    marginTop: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  interests: {
    borderRadius: 8,
    shadowOpacity: 10,
    width: 230,
    height: 60,
    borderWidth: 0,
  },
  common: {
    marginBottom: 5,
    color: 'gray',
  }
})
