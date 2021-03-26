import React, { useEffect, useState } from "react";
import axios from 'axios';

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
      <div className='marketplace-list'>
        {items.map(product => (
          <div>
          <h2>{product.name}</h2>
          <p>Year:{product.year}</p>
          <p>Color:{product.color}</p>
          <span>Pantone_Value: {product.pantone_value}</span>
          </div>
        ))}
    
    </div>
    )
  }





export default Marketplace;