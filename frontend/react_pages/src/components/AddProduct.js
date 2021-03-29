import React, { useState, useContext } from 'react'
import {ProductContext} from '../contexts/ProductListContext';
import { useHistory } from 'react-router-dom';

//MVP Requirements:
//make listing for items they want to sell, which will show up to all users


const AddProduct = () => {
  const [name, setName] = useState([]);
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [products, setProducts] = useContext(ProductContext)//contains user product list state
  
  

  //need to build onSubmit function that will make post request to general marketplace and display with all other listings

  const updateName = e => {
    setName(e.target.value)
  }

  const updatePrice = e => {
    setPrice(e.target.value)
  }

  const updateDescription = e => {
    setDescription(e.target.value)
  }

  const updateCategory = e => {
    setCategory(e.currentTarget.value)
  }

  const addProduct = e => {
    e.preventDefault()
    setProducts(prevProducts => [...prevProducts, {name: name, price: price, description: description, category: category}])
    
  }

  const cancelEdit = e => {
    e.preventDefault()
    window.location.href = '/product-list';
  }

  return(
    <div className='add-item-form'>
    <h2 style={{marginTop: '30px'}}>Sell a new product</h2>
    <form onSubmit={addProduct}>
    <label htmlFor='password'>Title:</label>
      <input 
        type='text' 
        name='name' 
        value={name}
        placeholder='product name' 
        onChange={updateName}/>
    <label htmlFor='password'>Price:</label>    
      <input 
        type='text' 
        name='price' 
        value={price}
        placeholder='set price' 
        onChange={updatePrice}/>
     <label htmlFor='password'>Description:</label>      
      <input 
        type='text' 
        name='description' 
        value={description}
        placeholder='description of product' 
        onChange={updateDescription}/>
      
      <select style={{marginTop: '30px', padding: '4px'}}value={category} onChange={updateCategory} id = "dropdown">
        <option value="N/A">Category</option>
        <option value={'Produce'}>Produce</option>
        <option value="Livestock">Livestock</option>
        <option value="Electronics">Electronics</option>
        <option value="Home Goods">Home Goods</option>
      </select>

      <div className='form-btn'>
      <button className='add-item-btn'>Add Product</button>
      <button className='add-item-btn' onClick={cancelEdit} style={{marginLeft: '10px'}}>Cancel</button>
      </div>
    
    </form>
  </div>
  )
}


export default AddProduct