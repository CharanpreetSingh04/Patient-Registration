import React from "react";
import Header from './components/Header';
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./components/Landing";
import OtpLogin from "./components/OtpLogin";

function App() {
  
  return (
    <Router>
      <Route exact path="/" component={Header} />
      <Route path="/Signin" component={Signin} />
      <Route path="/Signup" component={Signup} />
      <Route path="/Landing" component={Landing} />
      <Route path="/OtpLogin" component={OtpLogin} />

    </Router>
  
  );
}

export default App;
