import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";

const Nav = (props) => {
  return (
    <nav className="Nav">
      <ul>
        <li>
          <Link to="/">
            <img className="logo" src={Logo} alt="Logo"/>
          </Link>
        </li>
        <li>
          <Link to="/store">Store</Link>
        </li>
        <li>
          <Link to="/cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="cart-icon"
            >
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
            </svg>
            <div className="cart-quantity">
              <p>{props.cart.length}</p>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
