import React from "react";

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
      <p style={{ margin: "0" }}>Username</p>
    </nav>
  );
}

export default NavBar;
