import React from 'react'
import { StyleSheet, View } from 'react-native'

const Background = () => {
  return <View style={styles.container} />
}

export default Background

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5856d6',
    height: 1200,
    position: 'absolute',
    top: -250,
    transform: [{ rotate: '-70deg' }],
    width: 1000
  }
})
