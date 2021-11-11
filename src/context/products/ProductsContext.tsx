import React, { createContext, FC, useEffect, useState } from 'react'
import { Producto, ProductsResponse } from '../../interfaces/appInterfaces'
import cafeApi from '../../api/cafeApi'

type ProductsContextType = {
  products: Producto[]
  loadProducts: () => Promise<void>
  addProduct: (categoryId: string, productName: string) => Promise<void>
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
    setProducts([...products, ...data.productos])
  }

  const addProduct = async (categoryId: string, productName: string) => {}
  const updateProduct = async (
    categoryId: string,
    productName: string,
    productId: string
  ) => {}
  const deleteProduct = async (id: string) => {}
  const loadProductById = async (id: string) => {
    throw new Error('Method not implemented.')
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