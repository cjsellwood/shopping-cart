import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";

const Cart = (props) => {
  let totalPrice = 0;
  // Render item for each element in cart array
  const cartArray = props.cart.map((item, index) => {
    totalPrice += item.quantity * item.price;
    return (
      <Link
        to={{
          pathname: `/store/${item.name}`,
        }}
        key={item.number}
        className="cart-item"
      >
        <div className="cart-image-container">
          <img className="cart-image" src={item.src} alt={item.name} />
        </div>
        <div className="cart-details-container">
          <h1>{item.name}</h1>
          <p>{item.quantity} kg</p>
        </div>
        <div>
          <p>${props.formatPrice(item.price * item.quantity)}</p>
        </div>
        <div>
          <button
            title="Remove"
            type="button"
            data-index={index}
            onClick={props.removeItem}
            className="remove-button"
          >
            X
          </button>
        </div>
      </Link>
    );
  });
  return (
    <div className="cart-container">
      {cartArray}
      <div className="total-container">
        <div></div>
        <div></div>
        <div>
          <h1>Total</h1>
          <h2>${props.formatPrice(totalPrice)}</h2>
          {props.cart.length === 0 ? null : <button type="button">Checkout</button>}
        </div>
      </div>
    </div>
  );
};

export default Cart;
