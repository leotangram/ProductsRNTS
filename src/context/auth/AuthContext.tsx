import React, { createContext, useEffect, useReducer } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import cafeApi from '../../api/cafeApi'
import {
  Usuario,
  LoginResponse,
  LoginData
} from '../../interfaces/appInterfaces'
import { authReducer, IAuthState } from './authReducer'

type AuthContextType = {
  errorMessage: string
  token: string | null
  user: Usuario | null
  status: 'checking' | 'authenticated' | 'not-authenticated'
  signUp: () => void
  signIn: (loginData: LoginData) => void
  logOut: () => void
  removeError: () => void
}

const authInitialState: IAuthState = {
  status: 'checking',
  token: null,
  user: null,
  errorMessage: ''
}

export const AuthContext = createContext({} as AuthContextType)

export const AuthProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, authInitialState)

  useEffect(() => {
    checkToken()
  }, [])

  const checkToken = async () => {
    const token = await AsyncStorage.getItem('token')
    if (!token) return dispatch({ type: 'notAuthenticated' })
    const { data, status } = await cafeApi.get('/auth')
    if (status !== 200) {
      return dispatch({ type: 'notAuthenticated' })
    }

    dispatch({
      type: 'signIn',
      payload: {
        token: data.token,
        user: data.usuario
      }
    })
  }

  const signIn = async ({ correo, password }: LoginData) => {
    console.log({ correo, password })
    try {
      const { data } = await cafeApi.post<LoginResponse>('/auth/login', {
        correo,
        password
      })
      await AsyncStorage.setItem('token', data.token)
      dispatch({
        type: 'signIn',
        payload: {
          token: data.token,
          user: data.usuario
        }
      })
    } catch (error: any) {
      console.log('error', error.response.data.msg)
      dispatch({
        type: 'addError',
        payload: error.response.data.msg || 'Información incorrecta'
      })
    }
  }

  const signUp = () => {}
  const logOut = () => {}

  const removeError = () => dispatch({ type: 'removeError' })

  return (
    <AuthContext.Provider
      value={{
        ...state,
        signUp,
        signIn,
        logOut,
        removeError
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
