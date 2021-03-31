import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export const TokenAuthContext = createContext(null)

//inital values will be empty strings and axios post request will set values


export const TokenProvider = (props) => {
  
  //add hooks here
  const [auth, setAuth] = useState({user_name: '', password: ''})//value={auth.username} && {auth.password}//
  const [tokenSuccess, setTokenSuccess] = useState(false)

  const history = useHistory()

    const formReset = () => {
      Array.from(document.querySelectorAll("input")).forEach(
        input => (input.value = ""))
    }

    /* const handleChange = e => {
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
          formReset()
        })
      }  */



  return(
    <TokenAuthContext.Provider value={[auth, setAuth, tokenSuccess, setTokenSuccess]}>
      {props.children}
    </TokenAuthContext.Provider>
  )
}