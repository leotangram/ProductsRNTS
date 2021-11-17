import React, { FC, useContext, useEffect } from 'react'
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { Picker } from '@react-native-picker/picker'
import { ProductsStackParams } from '../navigator/ProductsNavigator'
import { useCategories } from '../hooks/useCategories'
import { useForm } from '../hooks/useForm'
import { ProducstContext } from '../context/products/ProductsContext'

interface ProductScreenProps
  extends StackScreenProps<ProductsStackParams, 'ProductScreen'> {}

const ProductScreen: FC<ProductScreenProps> = ({ navigation, route }) => {
  const { id = '', name = '' } = route.params

  const { loadProductById } = useContext(ProducstContext)

  const { categories } = useCategories()
  const { _id, categoriaId, form, img, nombre, onChange, setFormValue } =
    useForm({
      _id: id,
      categoriaId: '',
      nombre: name,
      img: ''
    })

  useEffect(() => {
    navigation.setOptions({
      title: name ? name : 'Nuevo producto'
    })
    loadProduct()
  }, [])

  const loadProduct = async () => {
    if (id.length === 0) return
    const product = await loadProductById(id)
    setFormValue({
      _id: id,
      categoriaId: product.categoria._id,
      img: product.img || '',
      nombre
    })
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.label}>Nombre del producto</Text>
        <TextInput
          onChangeText={value => onChange(value, 'nombre')}
          placeholder="Producto"
          style={styles.textInput}
          value={nombre}
        />
        <Text style={styles.label}>Categorías</Text>
        <Picker
          selectedValue={categoriaId}
          onValueChange={value => onChange(value, 'categoriaId')}
        >
          {categories.map(({ _id, nombre }) => (
            <Picker.Item key={_id} label={nombre} value={_id} />
          ))}
        </Picker>
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
        {img.length > 0 && (
          <Image
            source={{ uri: img }}
            style={{ height: 300, marginTop: 20, width: '100%' }}
          />
        )}
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
