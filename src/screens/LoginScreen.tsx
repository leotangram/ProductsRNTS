import React, { FC, useContext } from 'react'
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { loginStyles } from '../theme/loginTheme'
import Background from '../components/Background'
import WhiteLogo from '../components/WhiteLogo'
import { useForm } from '../hooks/useForm'
import { AuthContext } from '../context/auth/AuthContext'

interface LoginScreenProps extends StackScreenProps<any, any> {}

const LoginScreen: FC<LoginScreenProps> = ({ navigation }) => {
  const { signIn } = useContext(AuthContext)

  const { email, password, onChange } = useForm({
    email: '',
    password: ''
  })

  const onLogin = () => {
    Keyboard.dismiss()
    signIn({ correo: email, password })
  }

  return (
    <>
      <Background />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <View style={loginStyles.formContainer}>
          <WhiteLogo />
          <Text style={loginStyles.title}>Login</Text>
          <Text style={loginStyles.label}>Email: </Text>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            onChangeText={value => onChange(value, 'email')}
            onSubmitEditing={onLogin}
            placeholder="Ingresa tu email:"
            placeholderTextColor="rgba(255, 255, 255, 0.4)"
            selectionColor="#ffffff"
            style={[
              loginStyles.inputField,
              Platform.OS === 'ios' && loginStyles.inputFieldIOS
            ]}
            underlineColorAndroid="#ffffff"
            value={email}
          />
          <Text style={loginStyles.label}>Contraseña: </Text>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={value => onChange(value, 'password')}
            onSubmitEditing={onLogin}
            placeholder="******"
            placeholderTextColor="rgba(255, 255, 255, 0.4)"
            secureTextEntry
            selectionColor="#ffffff"
            style={[
              loginStyles.inputField,
              Platform.OS === 'ios' && loginStyles.inputFieldIOS
            ]}
            underlineColorAndroid="#ffffff"
            value={password}
          />
          <View style={loginStyles.buttonContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={loginStyles.button}
              onPress={onLogin}
            >
              <Text style={loginStyles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
          <View style={loginStyles.newUserContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.replace('RegisterScreen')}
            >
              <Text style={loginStyles.buttonText}>Nueva cuenta </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  )
}

export default LoginScreen
