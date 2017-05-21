import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions, ActivityIndicator } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { MapView, } from 'expo'
import { connect } from 'react-redux'
import * as actions from '../actions'
const { Marker } = MapView
import { Constants, Location, Permissions } from 'expo';
import Button from '../components/Button'
const { width: screenWidth, height: screenHeight } = Dimensions.get('window')



class MapScreen extends Component {
  static navigationOptions = {
    title: "Explore",
    tabBarIcon: ({ tintColor, focused }) =>
      <Ionicons name={`ios-locate${focused ? '' : '-outline'}`} color={tintColor} size={30} />
  }

  state = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }

  async componentWillMount () {
    this._getLocationAsync()
  }

  async componentDidMount () {
    await this.props.getUsers()
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync({});
    this.setState({ latitude, longitude });
  }


  _renderMakers = () => {
    return this.props.users.map(user => {
      return (
        <Marker key={user.uid} coordinate={user.coords} />
      )
    })
  }

  _handleRegionChange = ({ longitudeDelta, latitudeDelta }) => {
    this.setState({ ...this.state, longitudeDelta, latitudeDelta })
  }

  _handleChallengeStart = () => {
    this.props.challengeStart()
  }

  _renderLoadingIndicator () {
    return (
      <View style={{flex: 1}}>
        <MapView
          onRegionChange={this._handleRegionChange}
          style={styles.container}
          initialRegion={this.state}
        >
          { this._renderMakers() }

        </MapView>
        <ActivityIndicator color="black" size="large" style={styles.loadingIndicator} />
        <Button onPress={() => this.props.navigation.navigate('modal')} />
      </View>
    )
  }


  _renderMainScreen () {
    return (
      <View style={{flex: 1}}>
        <MapView
          onRegionChange={this._handleRegionChange}
          style={styles.container}
          initialRegion={this.state}
        >
          { this._renderMakers() }

        </MapView>
        <View style={styles.buttonContainer}>
          <Button onPress={this._handleChallengeStart} title="Search for challenges" />
        </View>
        <View style={styles.counterContainer}>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.counter}>5:12</Text>
            <Ionicons style={styles.clockIcon} name="ios-time-outline" color="#FF2B53" size={34} />
          </View>
        </View>
      </View>
    )
  }

  render () {
    if (this.props.requestReceived) {
      this.props.navigation.navigate('modal')
    }

    return this.props.requestMade ?
      this._renderLoadingIndicator() :
      this._renderMainScreen()
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEFF4'
  },
  buttonContainer: {
    bottom: 20,
    position: 'absolute',
    left: screenWidth / 5
  },
  counterContainer: {
    position: 'absolute',
    left: screenWidth / 3,
    top: 20,
  },
  counter: {
    color: '#FF2B53',
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    fontSize: 38,
  },
  clockIcon: {
    backgroundColor:'transparent',
    paddingLeft: 4,
    paddingTop: 4,
  },
  loadingIndicator: {
    position: 'absolute',
    left: 200,
    height: 500,
    transform: [ {scale: 3}],
  }

})


function mapStateToProps ({ users, auth }) {
  let requestMade;
  let requestReceived;

  if (Object.keys(users).length && users[auth.authedUID].challenge) {
    requestMade = !!users[auth.authedUID].challenge.requestMade
  } else {
    requestMade = false
  }

  if (Object.keys(users).length && users[auth.authedUID].challenge) {
    requestReceived = !!users[auth.authedUID].challenge.requestReceived
  } else {
    requestReceived = false
  }


  return {
    users: Object.values(users),
    requestMade,
    requestReceived,
  }
}



export default connect(mapStateToProps, actions)(MapScreen)