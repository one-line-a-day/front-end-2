import React, { Component } from "react";
import { Link } from "react-router-dom";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    if (this.state.username !== "" && this.state.password !== "") {
      return console.log("good");
    } else if (this.state.username === "") {
      return <alert>Plese enter your username</alert>;
    } else if (this.state.password === "") {
      return <alert>Plese enter your password</alert>;
    }
  };

  render() {
    return (
      <div>
        <h2>Login Form</h2>
        <form className="login-form" onSubmit={this.onSubmit}>
          <input
            className="login-input"
            type="text"
            placeholder="username"
            name="username"
            value={this.state.username}
            onChange={this.onChange}
          />
          <input
            className="login-input"
            type="password"
            placeholder="password"
            name="password"
            value={this.state.password}
            onChange={this.onChange}
          />
          <button className="login-button" onClick={this.onSubmit}>
            Login
          </button>
          <p className="not-registered">
            Not registered? <Link to={`./register`}>Register Now</Link>
          </p>
        </form>
      </div>
    );
  }
}

export default LoginForm;
