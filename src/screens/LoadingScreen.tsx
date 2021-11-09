import React from 'react'
import { ActivityIndicator, View } from 'react-native'

const LoadingScreen = () => {
  return (
    <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
      <ActivityIndicator color="#000000" size={50} />
    </View>
  )
}

export default LoadingScreen
