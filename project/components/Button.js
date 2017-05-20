import React from 'react'
import { StyleSheet } from 'react-native'
import { Button as RNButton } from 'react-native-elements'

export default function Button (props) {
  return (
    <RNButton
      color="white"
      buttonStyle={styles.button}
      backgroundColor="#FF2B53"
      title="Search for Challenges"
      {...props}
    />
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
  }
})