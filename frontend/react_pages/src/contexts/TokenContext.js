import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const TokenAuthContext = createContext(null)

const initialValues = {
  username: 'eve.holt@reqres.in',
  password: 'cityslicka',
}

export const TokenProvider = (props) => {
  
  //add hooks here
  const [state, setState] = useState(initialValues)

  useEffect(() => {
    postToken()
  }, [])

  //need to add to login form onSubmit function
  const postToken = () => {
    axios.post('https://reqres.in/api/login', state)
    .then(res => {
      setState(res.data)
      console.log('user token set', res);
      localStorage.setItem('token', res.data.token)
    })
    .catch(err => console.log('unable to set user token', err));
  }



  return(
    <TokenAuthContext.Provider value={state}>
      {props.children}
    </TokenAuthContext.Provider>
  )
}