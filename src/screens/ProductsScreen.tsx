import React, { useContext } from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import { ProducstContext } from '../context/products/ProductsContext'

const ProductsScreen = () => {
  const { products } = useContext(ProducstContext)

  return (
    <View style={{ flex: 1, marginHorizontal: 10 }}>
      <FlatList
        data={products}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
        keyExtractor={({ _id }) => _id}
        renderItem={({ item: { nombre } }) => (
          <TouchableOpacity activeOpacity={0.8}>
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
