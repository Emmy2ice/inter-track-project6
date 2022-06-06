import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import SignUpPage from './SignUpPage';
import LoginPage from './LoginPage';

function App() {
  return (
    <Router>
      
      <div className="App">
          <Switch>
            <Route exact path="/"><SignUpPage /></Route>
            <Route exact path="/LoginPage"><LoginPage /></Route>
          </Switch> 
      </div>
      </Router>
    
  );
}

export default App;
