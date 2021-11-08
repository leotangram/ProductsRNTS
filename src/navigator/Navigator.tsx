import React, { useContext } from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { AuthContext } from '../context/auth/AuthContext'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import ProtectedScreen from '../screens/ProtectedScreen'

const Stack = createStackNavigator()

const Navigator = () => {
  const { status } = useContext(AuthContext)

  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: '#ffffff'
        },
        headerShown: false
      }}
    >
      {status === 'authenticated' ? (
        <Stack.Screen name="ProtectedScreen" component={ProtectedScreen} />
      ) : (
        <>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        </>
      )}
    </Stack.Navigator>
  )
}

export default Navigator
