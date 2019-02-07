import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

import { loginUser } from "../../actions";

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
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.username === "") {
      return alert("Plese enter your username");
    } else if (this.state.password === "") {
      return alert("Plese enter your password");
    } else {
      this.loginUser();
    }
  };

  loginUser = () => {
    const user = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.loginUser(user).then(() => this.props.history.push("/home"));
  };

  render() {
    return (
      <Container
        className="login-container"
        style={{
          maxWidth: "100vw",
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
          autoComplete="new-password"
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
            <FormGroup style={{ paddingTop: "20px" }}>
              <Label>Username</Label>
              <Input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.onChange}
                placeholder="Username"
                autoComplete="new-password"
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
                autoComplete="new-password"
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
            Login
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

const mapStateToProps = state => ({
  username: state.username
});

export default connect(
  mapStateToProps,
  { loginUser }
)(LoginForm);
