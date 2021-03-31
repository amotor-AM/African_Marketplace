import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export const TokenAuthContext = createContext(null)

//inital values will be empty strings and axios post request will set values
const initialValues = {
  username: 'eve.holt@reqres.in',
  password: 'cityslicka',
}

export const TokenProvider = (props) => {
  
  //add hooks here
  const [auth, setAuth] = useState(initialValues)
  const [tokenSuccess, setTokenSuccess] = useState(false)

  useEffect(() => {
    postToken()
  }, [])


  //to be used after login form mered to main branch
   /* 
    const [auth, setAuth] = useState(initialValues)  //value={auth.username} && {auth.password}//
    
    const history = useHistory()

    const formReset = () => {
      Array.from(document.querySelectorAll("input")).forEach(
        input => (input.value = ""))
    }

    const handleChange = e => {
      setAuth({
        ...auth,
        [e.target.name]: e.target.value
      }
    )} 

    const handleSubmit = e => {
      e.preventDefault()
      axios.post('/login', auth)
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
      } */





  //remove postToken after merged to main branch
  const postToken = () => {
    axios.post('https://reqres.in/api/login', auth)
    .then(res => {
      setAuth(res.data)
      console.log('user token set', res);
      localStorage.setItem('token', res.data.token)
      setTokenSuccess(true)
      
    })
    .catch(err => {
      alert('incorrect username and/or password, please try again', err)
      console.log('error loggin in', err.message)
      setTokenSuccess(false)
    })
  }



  return(
    <TokenAuthContext.Provider value={[auth, setAuth, tokenSuccess, setTokenSuccess]}>
      {props.children}
    </TokenAuthContext.Provider>
  )
}