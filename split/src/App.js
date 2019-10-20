import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './components/Login';
import Register from './components/Register';
import PrivateRoute from './Routes/PrivateRoute';


function App() {
  return (
    <Router className='App'>
      <div>
        <Route exact path='/Login' component={Login} />
        <Route exact path='/Register' component={Register} />

      </div>
    </Router>
  )
}

export default App;