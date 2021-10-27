import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Navigator from './src/navigator/Navigator'
import { AuthProvider } from './src/context/auth/AuthContext'

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Navigator />
      </AuthProvider>
    </NavigationContainer>
  )
}

export default App
