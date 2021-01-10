import React from "react";
import "./MetalMart.css";
import Logo from "../images/logo.png";

const MetalMart = () => {
  return (
    <div className="home-container">
      <div>
        <img className="home-image" src={Logo} alt="MetalMart" />
      </div>
      <h1>The destination for all your elemental metal needs</h1>
    </div>
  );
};

export default MetalMart;
