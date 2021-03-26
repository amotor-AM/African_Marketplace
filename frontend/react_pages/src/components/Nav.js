import React, {useState, useContext} from 'react';
import {ProductContext} from '../contexts/ProductListContext'
import { Link } from 'react-router-dom';

const Nav = () => {
  const [products, setProducts] = useContext(ProductContext)
  
  return (
    <div className='nav'>
      <h3>African Marketplace</h3>
      <div className='nav-btns'>
      
      <Link to= '/' style={{textDecoration:'none'}}>
      <button>Home</button>
      </Link>

      <Link to= '/marketplace' style={{textDecoration:'none'}}>
      <button>Marketplace</button>
      </Link>

      <Link to= '/product-list' style={{textDecoration:'none'}}>
      <button>My Listings</button>
      </Link>

      <Link to= '/add-product' style={{textDecoration:'none'}}>
      <button>New Listing</button>
      </Link>

      <button>Sign Out</button>
      </div>
      <h3>My Products: {products.length}</h3>
    </div>
  )
}

export default Nav;