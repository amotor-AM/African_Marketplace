import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';


export const UserAuthContext = createContext(null)


export const UserProvider = (props) => {
  
  //add hooks here
  const [user, setUser] = useState('')

  //remove useEffect after login form is merged to main branch. only used for testing purposes
  useEffect(() => {
    getUser()
  }, [])

  const getUser = () => {
    axios.get('https://reqres.in/api/users/2')
    .then(res => {
      console.log('user logged in success', res);
      setUser(res.data);
    })
    .catch(err => console.log('unable to retrieve user info', err));
  }



  return(
    <UserAuthContext.Provider value={user} displayName="User Sign-In Data">
      {props.children}
    </UserAuthContext.Provider>
  )
}