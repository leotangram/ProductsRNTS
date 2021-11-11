import React, { FC, useEffect } from 'react'
import { Text, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { ProductsStackParams } from '../navigator/ProductsNavigator'

interface ProductScreenProps
  extends StackScreenProps<ProductsStackParams, 'ProductScreen'> {}

const ProductScreen: FC<ProductScreenProps> = ({ navigation, route }) => {
  const { id, name } = route.params

  useEffect(() => {
    navigation.setOptions({
      title: name ? name : 'Nuevo producto'
    })
  }, [])

  return (
    <View>
      <Text>
        {id} {name}
      </Text>
    </View>
  )
}

export default ProductScreen
