import React, { FC, useEffect } from 'react'
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native'
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
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.label}>Nombre del producto</Text>
        <TextInput placeholder="Producto" style={styles.textInput} />
        <Text style={styles.label}>Categorías</Text>
        <Button color="#5856d6" onPress={() => {}} title="Guardar" />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 10
          }}
        >
          <Button color="#5856d6" onPress={() => {}} title="Cámara" />
          <View style={{ width: 10 }} />
          <Button color="#5856d6" onPress={() => {}} title="Galería" />
        </View>
      </ScrollView>
    </View>
  )
}

export default ProductScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 10
  },
  label: {
    fontSize: 18
  },
  textInput: {
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 20,
    borderWidth: 1,
    height: 45,
    marginBottom: 15,
    marginTop: 5,
    paddingHorizontal: 10,
    paddingVertical: 5
  }
})
