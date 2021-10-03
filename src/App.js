import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route 
} from 'react-router-dom';

// Pages
import Home from './Home';

// Styling
import './css/App.css';

const App = () => {
    return(
        <Router>
            <Switch>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router> 
    );
};

export default App;