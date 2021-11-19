import React, { createContext, FC, useEffect, useState } from 'react'
import { Producto, ProductsResponse } from '../../interfaces/appInterfaces'
import cafeApi from '../../api/cafeApi'

type ProductsContextType = {
  products: Producto[]
  loadProducts: () => Promise<void>
  addProduct: (categoryId: string, productName: string) => Promise<Producto>
  updateProduct: (
    categoryId: string,
    productName: string,
    productId: string
  ) => Promise<void>
  deleteProduct: (id: string) => Promise<void>
  loadProductById: (id: string) => Promise<Producto>
  uploadImage: (data: any, id: string) => Promise<void>
}

export const ProducstContext = createContext({} as ProductsContextType)

export const ProductsProvider: FC = ({ children }) => {
  const [products, setProducts] = useState<Producto[]>([])

  useEffect(() => {
    loadProducts()
  }, [])

  const loadProducts = async () => {
    const { data } = await cafeApi.get<ProductsResponse>('/productos?limite=50')
    setProducts([...data.productos])
  }

  const addProduct = async (
    categoryId: string,
    productName: string
  ): Promise<Producto> => {
    const response = await cafeApi.post<Producto>('/productos', {
      nombre: productName,
      categoria: categoryId
    })
    setProducts([...products, response.data])

    return response.data
  }

  const updateProduct = async (
    categoryId: string,
    productName: string,
    productId: string
  ) => {
    const response = await cafeApi.put<Producto>(`/productos/${productId}`, {
      nombre: productName,
      categoria: categoryId
    })
    setProducts(
      products.map(product =>
        product._id === productId ? response.data : product
      )
    )
  }

  const deleteProduct = async (id: string) => {
    try {
      console.log({ id })
      const response = await cafeApi.delete(`/productos/${id}`)
      console.log({ response })
      loadProducts()
    } catch (error) {
      console.log({ error })
    }
  }

  const loadProductById = async (id: string): Promise<Producto> => {
    const response = await cafeApi.get<Producto>(`/productos/${id}`)
    return response.data
  }

  const uploadImage = async (data: any, id: string) => {}

  return (
    <ProducstContext.Provider
      value={{
        products,
        loadProducts,
        addProduct,
        updateProduct,
        deleteProduct,
        loadProductById,
        uploadImage
      }}
    >
      {children}
    </ProducstContext.Provider>
  )
}
