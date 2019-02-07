import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <a
        href="/home"
        style={{ margin: "0", textDecoration: "none", color: "white" }}
      >
        <img
          src="https://i.imgur.com/uwb2TGj.png"
          alt="logo"
          style={{ width: "200px", height: "60px" }}
        />
      </a>
      <Link to="/" style={{ margin: "0", color: "white", fontSize: "16px" }}>
        Log Out
      </Link>
    </nav>
  );
}

export default NavBar;
