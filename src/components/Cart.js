import React from "react";

const Cart = (props) => {
  const cartArray = props.cart.map(item => {
    return (
      <div key={props.cart.number}>
        <h1>{item.name}</h1>
        <p>{item.quantity} kg</p>
        <p>Total: ${item.quantity * item.price}</p>
        <button>Remove</button>
      </div>
    )
  })
  return <div>{cartArray}</div>;
};

export default Cart;
