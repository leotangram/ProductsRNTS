import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Navigator from './src/navigator/Navigator'
import { AuthProvider } from './src/context/auth/AuthContext'
import { ProductsProvider } from './src/context/products/ProductsContext'

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <ProductsProvider>
          <Navigator />
        </ProductsProvider>
      </AuthProvider>
    </NavigationContainer>
  )
}

export default App
