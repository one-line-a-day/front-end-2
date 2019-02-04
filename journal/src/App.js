import React, { Component } from "react";
import "./App.css";
import Login from "./components/Login/Login";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>One-Line-A-Day App</h1>
        <Login />
      </div>
    );
  }
}

export default App;
