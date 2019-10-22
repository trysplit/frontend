import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Bill from './components/Bill';
import Login from './components/Login';
import Register from './components/Register';
import PrivateRoute from './Routes/PrivateRoute';
import Home from './components/Home';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router className='App'>
      
      <div>
        <Navigation />
         <Bill />
        <Route exact path="/" component={Home}/>
        <Route path='/Login' component={Login} />
        <Route path='/Register' component={Register} />

        </div>
    )
}

export default App;