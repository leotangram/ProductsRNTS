import React, { FC, useContext, useEffect } from 'react'
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import WhiteLogo from '../components/WhiteLogo'
import { useForm } from '../hooks/useForm'
import { loginStyles } from '../theme/loginTheme'
import { AuthContext } from '../context/auth/AuthContext'

interface RegisterScreenProps extends StackScreenProps<any, any> {}

const RegisterScreen: FC<RegisterScreenProps> = ({ navigation }) => {
  const { errorMessage, removeError, signUp } = useContext(AuthContext)

  const { email, name, password, onChange } = useForm({
    email: '',
    name: '',
    password: ''
  })

  useEffect(() => {
    if (errorMessage.length === 0) return
    Alert.alert('Registro incorrecto', errorMessage, [
      { text: 'OK', onPress: removeError }
    ])
  }, [errorMessage])

  const onRegister = () => {
    Keyboard.dismiss()
    signUp({ nombre: name, correo: email, password })
  }

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ backgroundColor: '#5856D6', flex: 1 }}
      >
        <View style={loginStyles.formContainer}>
          <WhiteLogo />
          <Text style={loginStyles.title}>Registro</Text>
          <Text style={loginStyles.label}>Nombre: </Text>
          <TextInput
            autoCapitalize="words"
            autoCorrect={false}
            onChangeText={value => onChange(value, 'name')}
            onSubmitEditing={onRegister}
            placeholder="Ingresa tu nombre:"
            placeholderTextColor="rgba(255, 255, 255, 0.4)"
            selectionColor="#ffffff"
            style={[
              loginStyles.inputField,
              Platform.OS === 'ios' && loginStyles.inputFieldIOS
            ]}
            underlineColorAndroid="#ffffff"
            value={name}
          />
          <Text style={loginStyles.label}>Email: </Text>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            onChangeText={value => onChange(value, 'email')}
            onSubmitEditing={onRegister}
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
            onSubmitEditing={onRegister}
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
              onPress={onRegister}
            >
              <Text style={loginStyles.buttonText}>Crear cuenta</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.replace('LoginScreen')}
            style={loginStyles.buttonReturn}
          >
            <Text style={loginStyles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </>
  )
}

export default RegisterScreen
