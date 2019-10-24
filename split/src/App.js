import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Bill from './components/Bill';
import Login from './components/Login';
import Register from './components/Register';
import PrivateRoute from './Routes/PrivateRoute';
// import Home from './components/Home';
import Navigation from './components/Navigation';
// import Logout from './components/Logout';
import Profile from './components/Profile';
import './App.css';

function App() {
  return (
    <Router className='App'>
      
      <div>
        <Navigation />
        <Route path='/Login' component={Login} />
        <Route path='/Register' component={Register} />
        <PrivateRoute exact path="/bill" component={Bill} />
        <Route path="/MyProfile" component={Profile} />
        {/* <Route path="/Logout" component={Logout} /> */}
        </div>
    </Router >
    )
}

export default App;