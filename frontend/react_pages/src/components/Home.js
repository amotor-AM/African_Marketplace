import React from 'react';
import LoginForm from './Login'
import RegisterForm from './Register'
//placeholder homepage for testing purposes//
const Home = () => {
  return(
    <div>
      <h2 style={{marginTop: '30px', fontFamily: 'inter'}}>African Marketplace</h2>
      <br></br>
      <LoginForm/>
    </div>

  )
}


export default Home;