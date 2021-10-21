import React from 'react'
import { Text, TextInput } from 'react-native'
import { loginStyles } from '../theme/loginTheme'
import Background from '../components/Background'
import WhiteLogo from '../components/WhiteLogo'

const LoginScreen = () => {
  return (
    <>
      <Background />
      <WhiteLogo />
      <Text style={loginStyles.title}>Login</Text>
      <Text style={loginStyles.label}>Email: </Text>
      <TextInput
        keyboardType="email-address"
        placeholder="Ingresa tu email:"
        placeholderTextColor="rgba(255, 255, 255, 0.4)"
      />
    </>
  )
}

export default LoginScreen
