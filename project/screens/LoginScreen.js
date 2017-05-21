import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight, Alert } from 'react-native';
import { Facebook } from 'expo';

export default class LoginScreen extends Component {
  static propTypes = {}
  state = {}


  _handleLogIn = async () => {
    const { type, token } = await Facebook.logInWithReadPermissionsAsync('1993780664185469', {
      permissions: ['public_profile']
    });
    if (type === 'success') {
    // Get the user's name using Facebook's Graph API
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}`);
      Alert.alert(
        'Logged in!',
        `Hi ${(await response.json()).name}!`,
      );
    }
  }
  render () {
    return (
      <Image source={require('../assets/theFinalGif.gif')} style={styles.container}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Text style={styles.title}>Smile to Me</Text>
        <Text style={styles.pitchTitle}>Empower the real connections</Text>

        <TouchableHighlight style={styles.fbContainer} onPress={this._handleLogIn}>
          <View style={styles.FBLoginButton}>
            <Image style={styles.FBLogo} source={require('../assets/FB-f-Logo__white_144.png')} />
            <Text style={styles.FBLoginButtonText}>Facebook</Text>
          </View>
        </TouchableHighlight>

        <View style={styles.signLogContainer}>
          <TouchableHighlight style={styles.signLogButton}>
            <Text style={styles.FBLoginButtonText}>Sign Up</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.signLogButton}>
            <Text style={styles.FBLoginButtonText}>Login</Text>
          </TouchableHighlight>
        </View>
      </Image>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
    alignItems: 'center',
  },
  logo: {
    maxWidth: 120,
    maxHeight: 100,
    width: '100%',
    height: '100%',
    marginTop: 50,
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'Zapfino',
  },
  pitchTitle: {
    color: 'white',
    fontSize: 25,
    marginTop: 120,
    fontFamily: 'GillSans-LightItalic'
  },
  fbContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 90,
    marginBottom: 20
  },
  FBLoginButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    height: 50,
    width: 175,
    paddingLeft: 2,

    backgroundColor: '#3d5b97',
    borderRadius: 3,
    borderWidth: 1,
    borderColor: 'rgb(66,93,174)',

    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    },
  },
  FBLoginButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 20,
    fontFamily: 'Arial'
  },
  FBLogo: {
    position: 'absolute',
    height: 28,
    width: 28,

    left: 10,
    top: 10,
  },
  signLogContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 10,
    marginTop: 50,
    marginBottom: 20
  },
  signLogButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    height: 50,
    width: 175,
    paddingLeft: 2,
    marginRight: 20,

    backgroundColor: '#ff5a60',
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#ff5a60',

    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    },
  },
  TouchableHighlight: {

  }
})
