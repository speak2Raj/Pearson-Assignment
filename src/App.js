import './App.css';
import React from 'react';
import View from './components/View/View';
import Login from './Login';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from '@lyket/react';
import Dashboard from './components/Dashboard/Dashboard';
import Favorites from './components/Favorites/Favorites';

function App() {

    var name = localStorage.getItem('UserName')

  return (
<Provider>
    <React.Fragment>
      {name? <Router>
                  
                   <Route exact path="/" ><Dashboard /></Route>
                  <Route exact path="/Dashboard" ><Dashboard /></Route>
                  <Route exact path="/View/:id" ><View /></Route>
                  <Route exact path="/Favourite" ><Favorites /></Route>
                
            </Router> : 
            <Router>
                  <Route exact path="/" ><Login /></Route>
                  
                
            </Router>}
            
            
    </React.Fragment>
    </Provider>
  );
}

export default App;
