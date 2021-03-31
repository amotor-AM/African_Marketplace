import React, { useState, useContext } from 'react';
import axios from 'axios'
import '../login.css'
import { useHistory } from 'react-router-dom'
import {TokenAuthContext} from '../contexts/TokenContext'

export default function LoginForm() {
    const [auth, setAuth] = useContext(TokenAuthContext)
    const [tokenSuccess, setTokenSuccess] = useContext(TokenAuthContext)
    const history = useHistory()
    /* const [password, setPassword] = useState('') */
    

    const handleChange = e => {
        setAuth({
          ...auth,
          [e.target.name]: e.target.value
        }
      )} 
    
    const handleSubmit = e => {
        e.preventDefault()
        axios.post('http://localhost:5000/api/login', auth)
          .then(res => {
            console.log('user signed in successfully', res.data)
            localStorage.setItem('token', res.data.token)
            setTokenSuccess(true)
            history.push('/product-list')
          })
          .catch(err => {
            alert('incorrect username and/or password, please try again', err)
            console.log('error loggin in', err.message)
            setTokenSuccess(false)
            
          })
        } 
   

    return (
        <div className="login">
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
            <label>
                Username:
                <input 
                    name='user_name'
                    type='text'
                    autoFocus
                    value={auth.username}
                    onChange={handleChange}
                    required/>
            </label>
<br/>
            <label>
                Password:
                <input
                    name='password'
                    type='password'
                    value={auth.password}
                    onChange={handleChange}
                    required/>
           </label>
<br/>
            <button>Submit</button>
            
            </form>
        </div>
    )

}



