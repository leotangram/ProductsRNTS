import React, { FC, useContext, useEffect, useState } from 'react'
import {
  Button,
  FlatList,
  RefreshControl,
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
  const { deleteProduct, loadProducts, products } = useContext(ProducstContext)

  const [isRefreshing, setIsRefreshing] = useState(false)

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

  const loadProductsFromBackend = async () => {
    setIsRefreshing(true)
    await loadProducts()
    setIsRefreshing(false)
  }

  return (
    <View style={{ flex: 1, marginHorizontal: 10 }}>
      <FlatList
        data={products}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
        keyExtractor={({ _id }) => _id}
        refreshControl={
          <RefreshControl
            onRefresh={loadProductsFromBackend}
            refreshing={isRefreshing}
          />
        }
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
            <Button
              title="Eliminar producto"
              onPress={() => deleteProduct(_id)}
            />
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
