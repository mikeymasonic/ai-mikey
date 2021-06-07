import React from 'react';
// import { fbMessageData } from '../../utils/data';
import './app.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from '../home/Home';

const App = () => {

  return (
    <div>
      <Router>               
        <Switch>
          <Route 
            path="/" 
            exact
            render={(routerProps) => <Home {...routerProps} />} 
          />
        </Switch>
      </Router>
    </div>
  );
}; 

export default App; 
