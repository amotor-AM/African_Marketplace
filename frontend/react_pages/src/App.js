import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

import Home from './components/Home';
import ProductList from './components/ProductList';
import Nav from './components/Nav';
import AddProduct from './components/AddProduct';
import {ProductProvider} from './contexts/ProductListContext';
import {UserProvider} from './contexts/UserAuthContext';
/* import PrivateRoute from './components/PrivateRoute' */

function App() {
  return (
    <UserProvider>
    <ProductProvider>
      <Router>
    <div className="App">
      <Nav />
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/add-product' component={AddProduct}/>
      <Route path='/product-list' component={ProductList}/>
      </Switch>
    
    </div>
    </Router>
    </ProductProvider>
    </UserProvider>
  );
}

export default App;
