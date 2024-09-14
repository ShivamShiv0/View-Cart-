import React from "react";
  import './Navbar.css';


const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo">
        <img src=" /Images/brand_logo.png" alt="Nike logo" />
      </div>

      <ul >
        <li>MENU</li>
        <li>LOCATION</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>

      <button>Login</button>
    </div>
  );
};

export default Navbar;
