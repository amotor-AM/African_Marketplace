import React, { useState, createContext } from 'react';
import data from '../data'

export const ProductContext = createContext()


export const ProductProvider = (props) => {
  
  const [products, setProducts] = useState(data)  

  return(
    <ProductContext.Provider value={[products, setProducts]} displayName='Product List Data'>
      {props.children}
    </ProductContext.Provider>
  )
}