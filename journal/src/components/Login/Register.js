import React, { Component } from "react";
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";
import { Link } from "react-router-dom";
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.username === "") {
      return alert("Plese enter your username");
    } else if (this.state.password === "") {
      return alert("Plese enter your password");
    } else if (this.state.email === "") {
      return alert("Plese enter your email");
    }
  };

  render() {
    return (
      <Container
        className="login-container"
        style={{
          maxWidth: "1000px",
          display: "flex"
        }}
      >
        <img
          src="https://i.imgur.com/uwb2TGj.png"
          alt="logo"
          style={{ width: "350px", height: "150px", margin: "0 auto" }}
        />
        <Form
          className="form"
          style={{
            width: "50%",
            flexDirection: "column",
            alignItems: "center",
            margin: "0 auto",
            border: "1px solid white",
            padding: "10px",
            borderRadius: "10px",
            marginTop: "20px"
          }}
        >
          <Col>
            <FormGroup style={{ marginTop: "10px" }}>
              <Label>Username</Label>
              <Input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.onChange}
                placeholder="Username"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup style={{ marginTop: "10px" }}>
              <Label>Password</Label>
              <Input
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.onChange}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup style={{ marginTop: "10px" }}>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.onChange}
                placeholder="Email Address"
              />
            </FormGroup>
          </Col>
          <Button
            style={{
              backgroundColor: "#fd5d67",
              marginTop: "10px",
              width: "40%"
            }}
            className="login-button"
            onClick={this.onSubmit}
          >
            {this.state.username !== "" &&
            this.state.password !== "" &&
            this.state.email !== "" ? (
              <Link
                to="/home"
                style={{
                  color: "white",
                  textDecoration: "none"
                }}
              >
                Sign Up
              </Link>
            ) : (
              <div>Sign Up</div>
            )}
          </Button>

          <p className="not-registered">
            Already have an account?{" "}
            <Link className="register-link" to="/">
              Sign In
            </Link>
          </p>
        </Form>
      </Container>
    );
  }
}

export default Register;
