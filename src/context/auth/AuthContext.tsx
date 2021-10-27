import React, { createContext } from 'react'
import { Usuario } from '../../interfaces/appInterfaces'

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

const AuthContext = createContext({} as AuthContextType)

export const AuthProvider: React.FC = ({ children }) => {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>
}
