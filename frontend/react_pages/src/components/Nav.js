import React, {useState, useContext} from 'react';
import {ProductContext} from '../contexts/ProductListContext'
import {TokenAuthContext} from '../contexts/TokenContext'
import { Link } from 'react-router-dom';

const Nav = () => {
  const [products, setProducts] = useContext(ProductContext)
  const [tokenSuccess, setTokenSuccess] = useContext(TokenAuthContext)
  
  const logout = e => {
    e.preventDefault();
    localStorage.removeItem('token');
    setTokenSuccess(false)
    
}
  
return (
    <div className='nav'>
      <h3 style={{color: '#d207d2', fontWeight: 'bold', marginLeft: '15px'}}>african marketplace</h3>
      <div className='nav-btns' style={{marginRight: '80px'}}>
      
      <Link to= '/' style={{textDecoration:'none'}}>
      <button>Home</button>
      </Link>

      <Link to= '/marketplace' style={{textDecoration:'none'}}>
      <button>Marketplace</button>
      </Link>

      <Link to= '/product-list' style={{textDecoration:'none'}}>
      <button>My listings</button>
      </Link>

      <Link to= '/add-product' style={{textDecoration:'none'}}>
      <button>New Listing</button>
      </Link>
      
      
      <button onClick={logout}>Sign Out</button>
      
      
      </div>
      {tokenSuccess ? <h4 style={{color: '#d207d2', marginRight: '15px'}}>Items for sale {products.length}</h4> : 
      <h4 style={{color: '#d207d2', marginRight: '15px'}}>Please sign in</h4>}
    </div>
  )
}

export default Nav;