import React from "react";

const HomePage = () => {
  return (
    <div>
      <nav className="navbar">
        <a
          href="/home"
          style={{ margin: "0", textDecoration: "none", color: "white" }}
        >
          One-Line-A-Day
        </a>
        <p style={{ margin: "0" }}>Username</p>
      </nav>
      <h2>Home Page</h2>
    </div>
  );
};

export default HomePage;
