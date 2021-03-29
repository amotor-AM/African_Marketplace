import React, { useContext } from 'react'
import UserProduct from './UserCard';
import {ProductContext} from '../contexts/ProductListContext';

//need to add edit and delete functionality to allow user to manage personal listings

const UserProductList = () => {
  const [products]= useContext(ProductContext)
   

  return (
    <div>
      <h2 style={{marginTop: '30px'}}>My Listings</h2>
    <div className="parents">
    {products.map(product => (
      <div className="children">
      <UserProduct name={product.name} 
               price={product.price} 
               description={product.description}
               category={product.category} 
               key={product.id}/>
               </div>
  ))}
  </div>
  </div>
  )
  
}

export default UserProductList;