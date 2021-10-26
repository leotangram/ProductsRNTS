import React from 'react'
import { Platform, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { loginStyles } from '../theme/loginTheme'
import Background from '../components/Background'
import WhiteLogo from '../components/WhiteLogo'

const LoginScreen = () => {
  return (
    <>
      <Background />
      <View style={loginStyles.formContainer}>
        <WhiteLogo />
        <Text style={loginStyles.title}>Login</Text>
        <Text style={loginStyles.label}>Email: </Text>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          placeholder="Ingresa tu email:"
          placeholderTextColor="rgba(255, 255, 255, 0.4)"
          selectionColor="#ffffff"
          style={[
            loginStyles.inputField,
            Platform.OS === 'ios' && loginStyles.inputFieldIOS
          ]}
          underlineColorAndroid="#ffffff"
        />
        <Text style={loginStyles.label}>Contraseña: </Text>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="******"
          placeholderTextColor="rgba(255, 255, 255, 0.4)"
          selectionColor="#ffffff"
          style={[
            loginStyles.inputField,
            Platform.OS === 'ios' && loginStyles.inputFieldIOS
          ]}
          underlineColorAndroid="#ffffff"
        />
        <View style={loginStyles.buttonContainer}>
          <TouchableOpacity activeOpacity={0.8} style={loginStyles.button}>
            <Text style={loginStyles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={loginStyles.newUserContainer}>
          <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
            <Text style={loginStyles.buttonText}>Nueva cuenta </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

export default LoginScreen
