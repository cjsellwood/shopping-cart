import React from "react";
import { useLocation } from "react-router-dom";
import "./Product.css";

const Product = (props) => {
  // Find which product was clicked on from state that was passed through
  const location = useLocation();
  const product = props.data.filter((item) => {
    return item.name === location.state.name;
  })[0];

  // index of product in data array
  const index = props.data.indexOf(product);
  return (
    <div>
      <img className="showcase-image" src={product.src} alt={product.name} />
      <p>Name: {product.name}</p>
      <p>Price: ${product.price} /kg</p>
      <p> Atomic Number: {product.number}</p>
      <form data-index={index} onSubmit={props.addToCart}>
        <input
          type="number"
          name="quantity"
          placeholder="Enter Quantity"
          onChange={props.changeQuantity}
          value={props.currentQuantity !== 0 ? props.currentQuantity : ""}
          min="0"
        />
        <label htmlFor="quantity">kg</label>
        <button type="submit">Add To Cart</button>
      </form>
    </div>
  );
};

export default Product;
