import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

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
      <Container
        className="login-container"
        style={{
          maxWidth: "1000px",
          display: "flex"
        }}
      >
        <h2>One-Line-A-Day</h2>
        <Form
          className="form"
          style={{
            width: "50%",
            flexDirection: "column",
            alignItems: "center",
            margin: "0 auto",
            border: "1px solid white",
            padding: "10px",
            borderRadius: "10px"
          }}
        >
          <Col>
            <FormGroup style={{ paddingTop: "20px" }}>
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
            <FormGroup>
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
          <Button
            style={{
              backgroundColor: "#fd5d67",
              marginBottom: "20px",
              marginTop: "20px",
              width: "40%"
            }}
            className="login-button"
            onClick={this.onSubmit}
          >
            {this.state.username !== "" && this.state.password !== "" ? (
              <Link
                to="/home"
                style={{
                  color: "white",
                  textDecoration: "none"
                }}
              >
                Login
              </Link>
            ) : (
              <div>Login</div>
            )}
          </Button>

          <p className="not-registered">
            Don't have an account?{" "}
            <Link className="register-link" to="/register">
              Sign Up Now
            </Link>
          </p>
        </Form>
      </Container>
    );
  }
}

export default LoginForm;
