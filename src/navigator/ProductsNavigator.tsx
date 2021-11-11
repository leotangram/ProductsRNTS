import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ProductsScreen from '../screens/ProductsScreen'
import ProductScreen from '../screens/ProductScreen'

export type ProductsStackParams = {
  ProductsScreen: undefined
  ProductScreen: { id?: string; name?: string }
}

const Stack = createStackNavigator<ProductsStackParams>()

const ProductsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: '#ffffff'
        },
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent'
        }
      }}
    >
      <Stack.Screen
        component={ProductsScreen}
        name="ProductsScreen"
        options={{ title: 'Productos' }}
      />
      <Stack.Screen component={ProductScreen} name="ProductScreen" />
    </Stack.Navigator>
  )
}

export default ProductsNavigator
