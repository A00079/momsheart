import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingScreen from './views/landingScreen.js';
import SignUp from './views/SignUp.js';
import SignIn from './views/SignIn.js';
function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingScreen} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
      </Router>
    </div>
  );
}

export default App;
