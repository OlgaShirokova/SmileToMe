import React, { Component } from 'react'
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons'
import { connect } from 'react-redux'
import * as actions from '../actions'


const Logout = (props) => {
  return (
    <TouchableOpacity onPress={() => props.dispatch({ type: 'LOGOUT' })}>
      <SimpleLineIcons size={24} name="logout" color="#FF585B" style={{ marginRight: 20 }}/>
    </TouchableOpacity>
  )
}

const ConnectedLogout = connect()(Logout)

export default class PartnersScreen extends Component {
  static navigationOptions = {
    title: "Partners",
    tabBarIcon: ({ tintColor, focused }) =>
      <Ionicons name={`ios-ribbon${focused ? '' : '-outline'}`} color={tintColor} size={30} />,
    headerRight: <ConnectedLogout />,

  }
  state = {}
  render () {
    return (
      <ScrollView contentContainerStyle={styles.container}>

        <View style={[styles.containerPoints, styles.shadowisation]}>

          <Text style={styles.numberPoints}>460</Text>
          <Text style={styles.strPointsHeader}>points</Text>
        </View>

        <View style={[styles.containerSponsor, styles.shadowisation]}>
          <View style={styles.containerElement}>
            <Image source={require('../assets/Starbucks.png')} style={styles.icones} />
            <Text style={styles.distance}>100 m</Text>
          </View>

          <View style={styles.containerElement}>
            <Text style={styles.points}>200</Text>
            <Text style={styles.strPoints}>points</Text>
          </View>

          <View style={styles.containerReduction}>
            <Text style={styles.discount}>2    </Text>
            <Text style={styles.discount}>x</Text>
            <Text style={styles.discount}>     1</Text>
          </View>
        </View>

        <View style={[styles.containerSponsor, styles.shadowisation, styles.containerElementNotAvailable]}>
          <View style={styles.containerElement}>
            <Image source={require('../assets/picasso.png')} style={styles.icones} />
            <Text style={styles.distance}>245 m</Text>
          </View>

          <View style={styles.containerElement}>
            <Text style={styles.points}>500</Text>
            <Text style={styles.strPoints}>points</Text>
          </View>

          <View style={styles.containerReduction}>
            <Text style={styles.discount}>-30%</Text>
          </View>
        </View>

        <View style={[styles.containerSponsor, styles.shadowisation]}>
          <View style={styles.containerElement}>
            <Image source={require('../assets/superdry.png')} style={styles.icones} />
            <Text style={styles.distance}>360 m</Text>
          </View>

          <View style={styles.containerElement}>
            <Text style={styles.points}>300</Text>
            <Text style={styles.strPoints}>points</Text>
          </View>

          <View style={styles.containerReduction}>
            <Text style={styles.discount}>-15%</Text>
          </View>
        </View>

        <View style={[styles.containerSponsor, styles.shadowisation]}>
          <View style={styles.containerElement}>
            <Image source={require('../assets/dir.png')} style={styles.icones} />
            <Text style={styles.distance}>500 m</Text>
          </View>

          <View style={styles.containerElement}>
            <Text style={styles.points}>150</Text>
            <Text style={styles.strPoints}>points</Text>
          </View>

          <View style={styles.containerReduction}>
            <Text style={styles.discount}>Free</Text>
            <Text style={styles.discount}>Trial</Text>
          </View>
        </View>

      </ScrollView>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  shadowisation: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2
  },
  headerView: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: '100%',
    paddingTop: 15,
    elevation: 2,
    position: 'relative'
  },
  title: {
    color: '#ff5a60',
    fontSize: 22,
    fontFamily: 'GillSans',
  },
  containerPoints: {
    marginTop: 9,
    marginBottom: 3,
    padding: 9,
    borderRadius: 10,
    width: 150,
    alignItems: 'center',
    backgroundColor: '#ff5a60'
  },
  numberPoints: {
    fontSize: 40,
    color: 'white',
    fontFamily: 'GillSans',
  },
  strPointsHeader: {
    fontFamily: 'GillSans',
    color: 'white'
  },
  strPoints: {
    fontFamily: 'GillSans',
    color: 'grey'
  },
  containerSponsor: {
    backgroundColor: 'white',
    marginTop: 5,
    padding: 9,
    borderRadius: 10,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  containerElement: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerElementNotAvailable: {
    backgroundColor: '#EFEFF4'
  },
  containerReduction: {
    marginTop: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: 50,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#ff5a60',
    backgroundColor: 'transparent',
    alignItems: 'center',
    width: 60,
    height: 60
  },
  icones: {
    height: 87,
    width: 87
  },
  points: {
    fontFamily: 'GillSans',
    fontSize: 25
  },
  distance: {
    fontFamily: 'GillSans-Italic',
    fontSize: 11,
    marginTop: 4
  },
  discount: {
    fontFamily: "Trebuchet MS",
    color: '#ff5a60',
  }
})