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
import UpdatePayment from '../src/components/Payment/UdatedPaymant.js';
import Checkout from '../src/components/Payment/checkout.js';
function App() {
  return (
    <div className="App">
      <Notifications />
      <Favicon url={logo} />
      <Router>
        <Switch>
          <Route exact path="/" component={LandingScreen} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/cash-less-pay-ment/:id" component={UpdatePayment} />
          <Route exact path="/check-out-pay-ment/:id" component={Checkout} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
