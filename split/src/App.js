import React from 'react';
import Bill from './components/Bill'
import { Route } from 'react-router-dom';
import PrivateRoute from './Routes/PrivateRoute';

function App() {
    return (
        <div className="App">
            <Route>

                <h1>Split the Bill</h1>
                {/* <PrivateRoute exact path='/' component={Bill} /> */}
                <Bill />
            </Route>

        </div>
    )
}

export default App;