import React, { useState, useContext } from 'react'
import {ProductContext} from '../contexts/ProductListContext';
import { useHistory } from 'react-router-dom'
import axiosWithAuth from '../utils/axiosWithAuth'

//MVP Requirements:
//make listing for items they want to sell, which will show up to all users
  const listingValues = [
    {
      product_name: '',
      seller_price: '', 
      qty: '', 
      description: '',
      seller_name: '', 
      category_name: '',
      location: '',
      
  }]

 

  const AddProduct = () => {
    const [item, setItem] = useState(listingValues);
    /* const [category, setCategory] = useState({Chicken: 'Chicken', 
      Fish: 'Fish',
      Sweets: 'Sweets', 
      Cookies: 'Cookies',
      Beans: 'Beans',
      Rice: 'Rice',
      Corn: 'Corn',
      Flour: 'Flour',
      Spice: 'Spice',
      Pepper: 'Pepper',
      Cereals: 'Cereals',
      Maize: 'Maize',
      Fruit: 'Fruit',
      Peas: 'Peas', 
      Carrot: 'Carrot',
      RootVegetable: 'Root Vegetable',
      Seed_Nut: 'Seed / Nut',
      Other_Vegetable: 'Other Vegetable',
      Other: 'Other'})
    const [location, setLocation] = useState({Kinshasa: 'Kinshasa', Cairo: 'Cairo', Lagos: "Lagos", Johannesburg: 'Johannesburg', Ekurhuleni: 'Ekurhuleni'}) */
    const [products, setProducts] = useContext(ProductContext)//contains user product list in state
    
    
    const history = useHistory();
    const productLink = () => history.push('/product-list');//invoked on form submit
    const homeLink = () => history.push('/');//invoked on form submit

    
    const handleValueChanges = e => {
      setItem({
        ...item,
        [e.target.name]: e.target.value
    })
  }

    const cancelEdit = e => {
      e.preventDefault()
      homeLink()
    }

    
    const addProduct = e => {
      e.preventDefault()
      axiosWithAuth().post('/api/market', item)
      .then(res => {
        console.log('added new item to marketplace!', res.data)
        setProducts(...products, res.data)
        productLink()
      })
      .catch(err => {
        console.log('unable to add new item', err.message)
      })
    } 




  return(
    <div className='add-item-form' >
      <h2 style={{marginTop: '30px', fontFamily: 'inter'}}>Sell a new product</h2>
      <form onSubmit={addProduct}> 
      <label htmlFor='product_name' style={{fontFamily: 'inter', fontWeight: 'bold'}}>Product Name:</label>
        <input style={{textAlign: 'center'}}
          type='text' 
          name='product_name' 
          value={item.product_name}
          placeholder='product name' 
          onChange={handleValueChanges}/>
      <label htmlFor='seller_name' style={{fontFamily: 'inter', fontWeight: 'bold'}}>Your Name:</label>
        <input style={{textAlign: 'center'}}
          type='text' 
          name='seller_name' 
          value={item.seller_name}
          placeholder='your name' 
          onChange={handleValueChanges}/>    
      <label htmlFor='seller_price' style={{fontFamily: 'inter', fontWeight: 'bold'}}>Price:</label>    
        <input style={{textAlign: 'center'}}
          type='text' 
          name='seller_price' 
          value={item.seller_price}
          placeholder='set price' 
          onChange={handleValueChanges}/>
      <label htmlFor='description' style={{fontFamily: 'inter', fontWeight: 'bold'}}>Description:</label>      
        <input style={{textAlign: 'center'}}
          type='text' 
          name='description' 
          value={item.description}
          placeholder='description of product' 
          onChange={handleValueChanges}/>
       <label htmlFor='category' style={{fontFamily: 'inter', fontWeight: 'bold'}}>Category:</label>      
        <input style={{textAlign: 'center'}}
          type='text' 
          name='category' 
          value={item.category}
          placeholder='set item category' 
          onChange={handleValueChanges}/>    
        <label htmlFor='location' style={{fontFamily: 'inter', fontWeight: 'bold'}}>Location:</label>      
        <input style={{textAlign: 'center'}}
          type='text' 
          name='location' 
          value={item.location}
          placeholder='where are you located?' 
          onChange={handleValueChanges}/>
       <label htmlFor='qty' style={{fontFamily: 'inter', fontWeight: 'bold'}}>Quantity in stock:</label>      
        <input style={{textAlign: 'center'}}
          type='text' 
          name='qty' 
          value={item.qty}
          placeholder='set quantity in stock' 
          onChange={handleValueChanges}/>    
      
      {/* <select 
        style={{marginTop: '30px', padding: '4px', fontFamily: 'inter', width: '140px'}}
        onChange={handleValueChanges} 
        value={item.category}
        id = "category"
        >
          <option value="N/A">--Category--</option>
          <option value='Chicken'>Chicken</option>
          <option value={category.Beef}>Beef</option>
          <option value={category.Fish}>Fish</option>
          <option value={category.Sweets}>Sweets</option>
          <option value={category.Cookies}>Cookies</option>
          <option value={category.Beans}>Beans</option>
          <option value={category.Rice}>Rice</option>
          <option value={category.Corn}>Corn</option>
          <option value={category.Flour}>Flour</option>
          <option value={category.Spice}>Spice</option>
          <option value={category.Pepper}>Pepper</option>
          <option value={category.Cereal}>Cereals</option>
          <option value={category.Maize}>Maize</option>
          <option value={category.Fruit}>Fruit</option>
          <option value={category.Peas}>Peas</option>
          <option value={category.Carrot}>Carrot</option>
          <option value={category.RootVegetable}>Root Vegetable</option>
          <option value={category.Seed_Nut}>Seed / Nut</option>
          <option value={category.Other_Vegetable}>Other Vegetable</option>
          <option value={category.Other}>Other</option> 
      </select>

      <select 
        style={{marginTop: '30px', padding: '4px', fontFamily: 'inter', width: '140px'}}
        value={item.seller_location} 
        onChange={handleValueChanges} 
        id = "location"
        >
        <option value="N/A">--Location--</option>
        <option value='Kinshasa'>Kinshasa</option>
        <option value={location.Cairo}>Cairo</option>
        <option value={location.Lagos}>Lagos</option>
        <option value={location.Johannesburg}>Johannesburg</option>
        <option value={location.Ekurhuleni}>Ekurhuleni</option>
      </select> */}

      <div className='form-btn'>
        <button className='add-item-btn'>Add Product</button>
        <button className='add-item-btn' onClick={cancelEdit} style={{marginLeft: '10px'}}>Cancel</button>
      </div>
    
    </form>
  </div>
  )
}


export default AddProduct