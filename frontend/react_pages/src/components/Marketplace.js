import React, { useEffect, useState } from "react";
import axios from 'axios';
import MarketplaceCard from './MarketplaceCard';

//need to allow user to:
//see relevant prices in various categories to help them set their own prices

const Marketplace = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true)
  //need to change get request to marketplace items from server
  const getMarketItems = () => {
    axios.get('https://reqres.in/api/unknown')
    
      .then(res => {
        console.log('retrieved marketplace items', res)
        setItems(res.data.data)
        setLoading(false)
      })
      .catch(err => console.log('unable to retrieve marketplace items', err))
    }

    useEffect(() => {
      getMarketItems()
     
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
      
      {loading ? <h2 style={{color: 'red'}}>Loading..please wait</h2> : null}
        <div className='parent'>
          {items.map(product => (
            <div className='child'> 
              <MarketplaceCard 
                name={product.name} 
                year={product.year} 
                color={product.color} 
                pantone_value={product.pantone_value}
                key={product.id}/>
            </div>
          ))}
        </div>
      </div>
    )
  }





export default Marketplace;