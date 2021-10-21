import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

const WhiteLogo = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/react-logo-white.png')}
        style={styles.image}
      />
    </View>
  )
}

export default WhiteLogo

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  image: {
    height: 100,
    width: 110
  }
})
