import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router'
import { Link } from 'react-router-dom'
import LoginForm from './component/Login'
import RegisterForm from './component/Register'

function App() {
  return (

  
    <div className="App">
      <button>
        <Link to='/component/Register' >Register</Link>
      </button>
      <button>
      <Link to='/component/Login'>Login</Link>
      </button>

      
        <Route path='/component/Register'>
          <RegisterForm/>
        </Route>
      

        <Route path='/component/Login'>
          <LoginForm/>
        </Route>


    </div>
  );
}

export default App;
