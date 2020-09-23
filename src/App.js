import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingScreen from './views/landingScreen.js';
import SignUp from './views/SignUp.js';
import SignIn from './views/SignIn.js';
import Favicon from 'react-favicon';
import logo from '../src/assets/img/momslogo.jpg';
import Notifications from 'react-notify-toast';
import Payment from '../src/components/Payment/Payment.js';

function App() {
  return (
    <div className="App">
      <Notifications />
      <Favicon url={logo} />
      <Router>
        <Route exact path="/" component={LandingScreen} />
        <Route  path="/signup" component={SignUp} />
        <Route  path="/signin" component={SignIn} />
        <Route  path="/cash-less-pay-ment" component={Payment} />
      </Router>
    </div>
  );
}

export default App;
