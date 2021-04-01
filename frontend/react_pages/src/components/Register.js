import React, { useState, useContext } from 'react';
import axios from 'axios'
import '../login.css'
import { useHistory } from 'react-router-dom'
import {AuthContext} from '../contexts/AuthContext'



export default function RegisterForm() {
    const [registercreds, setRegisterCreds] = useContext(AuthContext);
    const [tos, setTos] = useState(false);

    const history = useHistory()

    const handleChange = e => {
        setRegisterCreds({
        ...registercreds,
        [e.target.name]: e.target.value
        }
      )} 

    const handleCheck = e => {
        setTos({ 
         ...tos, 
        [e.target.name]: e.target.checked }
      )}  

    const handleSubmit = e => {
        e.preventDefault()
        axios.post('https://africanmarketplaceunit4.herokuapp.com/register', registercreds)
          .then(res => {
            console.log('user has registered successfully', res.data)
            history.push('/') 
          })
          .catch(err => {
            console.log('user registration failed', err)     
          })
        } 
    
       


    return (
        <div className="login">
            <form className='form' onSubmit={handleSubmit}>
                <h1>Create Account</h1>
            <label>
                Username:
                <input 
                    name='user_name'
                    type='text'
                    autoFocus
                    value={registercreds.user_name}
                    onChange={handleChange}
                    required/>
            </label>
<br/>
            <label>
                Password:
                <input
                    name='password'
                    type='password'
                    value={registercreds.password}
                    onChange={handleChange}
                    required/>
           </label>
<br/>
           <label >
               Terms
               <input
                    name='tos-checked'
                    type='checkbox'
                    value={tos}
                    onChange={handleCheck}
                    required
                    />

           </label>
<br/>
            <button style={{display:'inline-block',fontSize: '0.8em', backgroundColor:'#ed4933', color:'#ffffff', cursor: 'pointer', fontWeight:'600', padding:'0 2.75em' ,  letterSpacing:'0.225em', fontSizeAdjust: '0.8em', textTransform:'uppercase'}}>Submit</button>
            
            </form>
        </div>
    )

}


