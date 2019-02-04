import React, { Component } from "react";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <form className="register-form">
          <input
            className="register-input"
            type="text"
            name="name"
            placeholder="Name"
          />
          <input
            className="register-input"
            type="text"
            name="username"
            placeholder="Username"
          />
          <input
            className="register-input"
            type="text"
            name="email"
            placeholder="Email"
          />
          <input
            className="register-input"
            type="password"
            name="password"
            placeholder="Password"
          />
          <button>Register</button>
        </form>
      </div>
    );
  }
}

export default Register;
