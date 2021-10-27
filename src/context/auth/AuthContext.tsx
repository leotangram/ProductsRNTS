import React, { createContext, useReducer } from 'react'
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

  const signIn = async ({ correo, password }: LoginData) => {
    try {
      const response = await cafeApi.post<LoginResponse>('/auth/login', {
        correo,
        password
      })
      console.log(response.data)
    } catch (error) {
      console.log(error.response.data)
    }
  }

  const signUp = () => {}
  const logOut = () => {}
  const removeError = () => {}

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
