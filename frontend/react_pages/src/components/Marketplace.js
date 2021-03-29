import React, { useEffect, useState } from "react";
import axios from 'axios';
import MarketplaceCard from './MarketplaceCard';

//need to allow user to:
//see relevant prices in various categories to help them set their own prices

const Marketplace = () => {
  const [items, setItems] = useState([]);

  const getMarketItems = () => {
    axios.get('https://reqres.in/api/unknown')
      .then(res => {
        console.log('retrieved marketplace items', res)
        setItems(res.data.data)
      })
      .catch(err => console.log('unable to retrieve marketplace items', err))
    }

    useEffect(() => {
      getMarketItems()
    }, [])


    return (
      <div>
        <h2 style={{textAlign: 'center', marginTop: '35px'}}>Marketplace</h2>   
          <div className='parent'>
          {items.map(product => (
          <div className='child'> 
            <MarketplaceCard 
              name={product.name} 
              year={product.year} 
              color={product.color} 
              pantone_value={product.pantone_value}/>
          </div>
        ))}
      </div>
    </div>
    )
  }





export default Marketplace;