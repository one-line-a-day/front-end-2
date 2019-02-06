import React, { Component } from "react";
import { Route } from "react-router-dom";

import LoginForm from "./LoginForm";
import Register from "./Register";
import HomePage from "../Home/HomePage";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Route exact path="/" component={LoginForm} />
        <Route path="/register" component={Register} />
        <Route path="/home" component={HomePage} />
      </div>
    );
  }
}

export default Login;
