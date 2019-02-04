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
    if (this.state.username === "") {
      return alert("Plese enter your username");
    } else if (this.state.password === "") {
      return alert("Plese enter your password");
    }
  };

  render() {
    return (
      <div>
        <h2>Login Form</h2>
        <form
          className="login-form"
          onSubmit={this.onSubmit}
          autoComplete="off"
        >
          <input
            className="login-input"
            type="text"
            placeholder="username"
            name="username"
            value={this.state.username}
            onChange={this.onChange}
            autoComplete="none"
          />
          <input
            className="login-input"
            type="password"
            placeholder="password"
            name="password"
            value={this.state.password}
            onChange={this.onChange}
            autoComplete="none"
          />
          <button className="login-button" onClick={this.onSubmit}>
            {this.state.username !== "" && this.state.password !== "" ? (
              <Link to="/home" className="login-button-true">
                Login
              </Link>
            ) : (
              <div>Login</div>
            )}
          </button>
          <p className="not-registered">
            Not registered? <Link to="/register">Register Now</Link>
          </p>
        </form>
      </div>
    );
  }
}

export default LoginForm;
