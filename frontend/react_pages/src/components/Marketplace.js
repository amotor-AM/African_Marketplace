import React, { useEffect, useState } from "react";
import axiosWithAuth from '../utils/axiosWithAuth'
import MarketplaceCard from './MarketplaceCard';

//need to allow user to:
//see relevant prices in various categories to help them set their own prices
const initialValues = [
{
  product_name: '',
  seller_price: '', 
  qty: '', 
  description: '',
  seller_name: '', 
  location: '',
  category: ''
}
]

const Marketplace = () => {
  const [items, setItems] = useState(initialValues);
  const [loading, setLoading] = useState(true)
  //need to change get request to marketplace items from server
  const getAllMarketItems = () => {
    axiosWithAuth().get('/api/market')
      .then(res => {
        console.log('retrieved marketplace items', res.data)
        setItems(res.data)
        setLoading(false) 
      })
      .catch(err => console.log('unable to retrieve marketplace items', err))
    }

     useEffect(() => {
      getAllMarketItems()
     
    }, []) 


    return (
      <div className="marketplace">
        <h2 style={{textAlign: 'center', marginTop: '35px', fontFamily: 'inter'}}>Marketplace</h2> 
          
          <form className='marketplace-form' style={{fontFamily: 'inter'}}>
          <select style={{marginTop: '30px', marginRight: '15px', padding: '4px'}}value='' id = "dropdown">
          <option value="N/A">--Category--</option>
          <option value={'Chicken'}>Chicken</option>
          <option value="Beef">Beef</option>
          <option value="Fish">Fish</option>
          <option value="Sweets">Sweets</option>
          <option value="Cookies">Cookies</option>
          <option value="Beans">Beans</option>
          <option value="Rice">Rice</option>
          <option value="Corn">Corn</option>
          <option value="Flour">Flour</option>
          <option value="Spice">Spice</option>
          <option value="Pepper">Pepper</option>
          <option value="Cereals">Cereals</option>
          <option value="Maize">Maize</option>
          <option value="Fruit">Fruit</option>
          <option value="Peas">Peas</option>
          <option value="Carrot">Carrot</option>
          <option value="Root Vegetable">Root Vegetable</option>
          <option value="Seed / Nut">Seed / Nut</option>
          <option value="Other Vegetable">Other Vegetable</option>
          <option value="Other">Other</option>

        </select>

          <select style={{marginTop: '30px', padding: '4px'}}value='' id = "dropdown">
          <option value="N/A">--Location--</option>
          <option value='Kinshasa'>Kinshasa</option>
          <option value="Lagos">Lagos</option>
          <option value="Cairo">Cairo</option>
          <option value="Johannesburg">Johannesburg</option>
          <option value="Ekurhuleni">Ekurhuleni</option>
        </select>
      </form>
      
      {loading ? <h2 style={{color: 'red'}}>Loading..please wait</h2> :
      
        <div className='parent'>
          {items.map(product => (
            <div className='child'> 
              <MarketplaceCard 
                product_name={product.product_name} 
                category={product.category} 
                seller_price={product.seller_price} 
                description={product.description}
                seller_name={product.seller_name}
                location={product.location}
                qty={product.qty}
                key={product.product_id}/>
            </div>
          ))}
        </div> }
      </div>
    )
          
  }





export default Marketplace;