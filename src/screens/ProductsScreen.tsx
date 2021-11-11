import React, { FC, useContext, useEffect } from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { ProducstContext } from '../context/products/ProductsContext'
import { ProductsStackParams } from '../navigator/ProductsNavigator'

interface ProductsScreenProps
  extends StackScreenProps<ProductsStackParams, 'ProductsScreen'> {}

const ProductsScreen: FC<ProductsScreenProps> = ({ navigation }) => {
  const { products } = useContext(ProducstContext)

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate('ProductScreen', {})}
          style={{ marginRight: 10 }}
        >
          <Text>Agregar</Text>
        </TouchableOpacity>
      )
    })
  }, [])

  return (
    <View style={{ flex: 1, marginHorizontal: 10 }}>
      <FlatList
        data={products}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
        keyExtractor={({ _id }) => _id}
        renderItem={({ item: { _id, nombre } }) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate('ProductScreen', {
                id: _id,
                name: nombre
              })
            }
          >
            <Text style={styles.productName}>{nombre}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default ProductsScreen

const styles = StyleSheet.create({
  itemSeparator: {
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    borderBottomWidth: 5,
    marginVertical: 5
  },
  productName: {
    fontSize: 20
  }
})
