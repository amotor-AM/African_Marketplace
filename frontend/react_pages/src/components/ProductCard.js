import React from 'react';
import { Card } from 'react-bootstrap'


const UserProductCard = (props) => {
  

  return (

  <div>
    <Card.Body>
      <Card.Title style={{flex: '0 0 40%', fontWeight: 'bold', fontSize: '25px', fontFamily: 'inter'}}>{props.name}</Card.Title>
      {/*placeholder image used below for testing, use props.image_url or whatever is used on server data*/}
      <Card.Img variant="top" src="https://d3vn5rg72hh8yg.cloudfront.net/cdn/imagesource/previews/7676/c8a63adebd0632f60ee1d502624520ca/3/45cf4bfe562f47d994504c136cd95add/2302661.jpg"/>
      <h5 style={{textAlign: 'left', fontStyle: 'italic'}}>{props.price}</h5>
      <Card.Text style={{fontStyle: 'italic', textAlign: 'left'}}>{props.description}</Card.Text>
    </Card.Body>
    <button className='add-item-btn' style={{marginRight: '10px', width: '120px', marginTop: '20px'}}>Edit</button>
    <button className='add-item-btn' style={{width: '120px'}}>Delete</button>
  </div>
  
    
  )
}


export default UserProductCard;