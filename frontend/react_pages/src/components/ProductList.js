import React, { useState, useContext } from 'react'
import Product from './Product';
import {ProductContext} from '../contexts/ProductListContext';

const ProductList = () => {
  const [products]= useContext(ProductContext)
   

  return (
    <div>
    {products.map(product => (
      <Product name={product.name} 
               price={product.price} 
               description={product.description} 
               key={product.id}/>
  ))}
  </div>
  )
}

export default ProductList;