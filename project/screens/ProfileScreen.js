import React, { Component } from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Constants } from 'expo';
import { Button as RNButton } from 'react-native-elements';

function Button (props) {
  return (
    <RNButton
      color="white"
      buttonStyle={styles.button}
      backgroundColor="#FF2B53"
      title="Edit Profile"
      {...props}
    />
  )
}

export default class ProfileScreen extends Component {
  defaultProps = {
    user: {
      name: 'Nandan Rao',
      avatarURL: 'https://avatars1.githubusercontent.com/u/7491490?v=3&s=400',
      points: 900,
      description: 'The happiness of your life depends on the quality of your thoughts',
    },
  }

  static navigationOptions = {
    title: "Profile",
    tabBarIcon: ({ tintColor, focused }) =>
      <Ionicons name={`ios-contact${focused ? '' : '-outline'}`} color={tintColor} size={30} />
  }
  state = {}

  render () {
    this.props = this.defaultProps;
    return (
      <View style={styles.container}>
        <View style={styles.imgView}>
          <Image
            style={styles.img}
            source={{ uri: this.props.user.avatarURL }}
          />
          <Text style={styles.name}> {this.props.user.name} </Text>
          <Image
            style={styles.toggle}
            source={{ uri: 'http://i.imgur.com/3fyjYR6.png' }}
          />
          <Text style={styles.active}> You are active! </Text>
        </View>

        <View style={styles.descriptionView}>
          <Text style={styles.description}> {this.props.user.description} </Text>
        </View>

        <View style={styles.interestsView}>
          <Image
            style={styles.interests}
            source={{ uri: 'http://i.imgur.com/RvmnwRH.png' }}
          />
        </View>

        <View>
          <Button> </Button>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEFF4',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: Constants.statusBarHeight,
  },
  imgView: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 24,
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
    marginBottom: 10,
  },
  descriptionView: {
    borderTopWidth: 1,
    borderBottomWidth: 0,
    width: 250,
    height: 90,
    justifyContent: 'center'
  },
  description: {
    margin: 2,
    fontSize: 16,
    fontWeight: 'normal',
    textAlign: 'center',
    color: 'black',
    padding: 0,
  },
  toggle: {
    height: 35,
    width: 67,
    margin: 2,
  },
  active: {
    marginTop: 5,
    color: 'gray',
  },
  button: {
    width: 200,
    borderRadius: 8,
    marginTop: 30,
    marginBottom: 20,
  },
   interestsView: {
    width: 250,
    padding: 20,
    paddingTop: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
  },
  interests: {
    borderRadius: 8,
    width: 230,
    height: 60,
  },
})