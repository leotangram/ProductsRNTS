import React, { createContext, useReducer } from 'react'
import { Usuario } from '../../interfaces/appInterfaces'
import { authReducer, IAuthState } from './authReducer'

type AuthContextType = {
  errorMessage: string
  token: string | null
  user: Usuario | null
  status: 'checking' | 'authenticated' | 'not-authenticated'
  signUp: () => void
  signIn: () => void
  logOut: () => void
  removeError: () => void
}

const authInitialState: IAuthState = {
  status: 'checking',
  token: null,
  user: null,
  errorMessage: ''
}

const AuthContext = createContext({} as AuthContextType)

export const AuthProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, authInitialState)

  const signUp = () => {}
  const signIn = () => {}
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
