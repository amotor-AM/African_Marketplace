import React, { useState, useContext } from 'react'
import { Card } from 'react-bootstrap'


const MarketplaceCard = (props) => {
  
return (
  
<div className='parent'>
  <div className='child'>
    <Card.Body style={{width: '480px'}}>
      <Card.Title style={{fontWeight: 'bold', fontSize: '25px', fontFamily: 'inter'}}>{props.product_name} (Seller: {props.seller_name})</Card.Title>
      <Card.Img variant="top" src={props.src} />
      <Card.Text style={{textAlign: 'left'}}>
      <h5 style={{fontStyle: 'italic', textAlign: 'left'}}>${props.seller_price}</h5>
      <Card.Text style={{fontFamily: 'inter', fontWeight: 'bold', textAlign: 'center'}}><p>{props.description}</p></Card.Text>
      <Card.Text style={{fontFamily: 'inter', fontWeight: 'bold', textAlign: 'center'}}><p>{props.location}</p></Card.Text>
      </Card.Text>
    </Card.Body>
      <small className="text-muted">{props.price}</small>
      <div className="add-cart">
      <button className='add-cart-btn'>Add to Cart</button>
    </div>
    </div>
  </div> 
  )
}

export default MarketplaceCard;