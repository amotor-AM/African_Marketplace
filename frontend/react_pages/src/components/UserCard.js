import React from 'react';
import { Card, Button, CardGroup } from 'react-bootstrap'


const UserProduct = (props) => {

  return (
  <div>
    <Card.Body>
      <Card.Title style={{fontWeight: 'bold', fontSize: '25px'}}>{props.name} ({props.category})</Card.Title>
      <Card.Img variant="top" src="https://d3vn5rg72hh8yg.cloudfront.net/cdn/imagesource/previews/7676/c8a63adebd0632f60ee1d502624520ca/3/45cf4bfe562f47d994504c136cd95add/2302661.jpg"/>
      <Card.Text>{props.description}</Card.Text>
    </Card.Body>
    <h4>{props.price}</h4>
    <button className='add-item-btn' style={{marginRight: '10px', width: '120px', marginTop: '20px'}}>Edit</button>
    <button className='add-item-btn' style={{width: '120px'}}>Delete</button>
  </div>
  
   

    
  )
}


export default UserProduct;