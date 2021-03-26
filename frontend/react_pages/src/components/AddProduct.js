import React, { useState, useContext } from 'react'
import {ProductContext} from '../contexts/ProductListContext';
import { useHistory } from 'react-router-dom'

const AddProduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('')
  const [products, setProducts] = useContext(ProductContext)//contains user product list state
  
  const history = useHistory();

  const updateName = e => {
    setName(e.target.value)
  }

  const updatePrice = e => {
    setPrice(e.target.value)
  }

  const updateDescription = e => {
    setDescription(e.target.value)
  }

  const addProduct = e => {
    e.preventDefault()
    setProducts(prevProducts => [...prevProducts, {name: name, price: price, description: description}])
    
  }

  const cancelEdit = e => {
    e.preventDefault()
    history.push('/product-list')
  }

  return(
    <div className='add-item-form'>
    <form onSubmit={addProduct}>
      <input 
        type='text' 
        name='name' 
        value={name}
        placeholder='product name' 
        onChange={updateName}/>
      <input 
        type='text' 
        name='price' 
        value={price}
        placeholder='set price' 
        onChange={updatePrice}/>
      <input 
        type='text' 
        name='description' 
        value={description}
        placeholder='description of product' 
        onChange={updateDescription}/>
      <button>Add Product</button>

      <button 
        onClick={cancelEdit}
        style={{marginLeft: '10px', backgroundColor: 'green', width: '90px'}}>Cancel
      </button>
    </form>
  </div>
  )
}


export default AddProduct