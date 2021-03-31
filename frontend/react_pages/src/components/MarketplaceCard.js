import React, { useState, useContext } from 'react'
import { Card } from 'react-bootstrap'


const MarketplaceCard = (props) => {
  
return (
  
<div className='parent'>
  <div className='child'>
    <Card.Body style={{width: '480px'}}>
      <Card.Title style={{fontWeight: 'bold', fontSize: '25px', fontFamily: 'inter'}}>{props.name}</Card.Title>
      <Card.Img variant="top" src="https://d3vn5rg72hh8yg.cloudfront.net/cdn/imagesource/previews/7676/c8a63adebd0632f60ee1d502624520ca/3/45cf4bfe562f47d994504c136cd95add/2302661.jpg" />
      <Card.Text style={{}}>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
      <small className="text-muted">{props.price}</small>
      <div className="add-cart">
      <h4 style={{fontStyle: 'italic'}}>$10.00</h4>
      <button className='add-cart-btn'>Add to Cart</button>
    </div>
    </div>
  </div> 
  )
}

export default MarketplaceCard;