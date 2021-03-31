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
      <div>
        <h2 style={{textAlign: 'center', marginTop: '35px'}}>Marketplace</h2> 
          <form>
          <select style={{marginTop: '30px', marginRight: '15px', padding: '4px'}}value='' id = "dropdown">
          <option value="N/A">--Category--</option>
          <option value={'Produce'}>Produce</option>
          <option value="Livestock">Livestock</option>
          <option value="Electronics">Electronics</option>
          <option value="Home Goods">Home Goods</option>
        </select>

          <select style={{marginTop: '30px', padding: '4px'}}value='' id = "dropdown">
          <option value="N/A">--Location--</option>
          <option value={'Nairobi'}>Nairobi</option>
          <option value="Cape Town">Cape Town</option>
          <option value="Lagos">Lagos</option>
          <option value="Accra"></option>
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