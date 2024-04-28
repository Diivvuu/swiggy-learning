import React, { useState } from "react";
import "./Header.css";
import logo from "../assets/logo.png";

const Header = () => {
  const [LoginButton, setLoginButton] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img src={logo} alt="App logo" className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            onClick={() => {
              if (LoginButton === "Login") {
                setLoginButton("Logout");
              } else {
                setLoginButton("Login");
              }
            }}
          >
            {LoginButton}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;