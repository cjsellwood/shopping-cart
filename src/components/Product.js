import React from "react";
import { useLocation } from "react-router-dom";
import "./Product.css";

const Product = (props) => {
  // Find which product to show from the url
  const location = useLocation();
  const splitPath = location.pathname.split("/");
  const productName = splitPath[splitPath.length - 1];

  // Find product object from data array
  const product = props.data.filter((item) => {
    return item.name === productName;
  })[0];

  // index of product in data array
  const index = props.data.indexOf(product);
  return (
    <div className="product-container">
      <h1 className="product-name">{product.name}</h1>
      <div className="showcase-image-container">
        <img className="showcase-image" src={product.src} alt={product.name} />
      </div>
      <p className="product-price">${props.formatPrice(product.price)} /kg</p>

      <form
        className="product-form"
        data-index={index}
        onSubmit={props.addToCart}
      >
        <div>
          <input
            type="number"
            name="quantity"
            placeholder="Enter Quantity"
            onChange={props.changeQuantity}
            value={props.currentQuantity !== 0 ? props.currentQuantity : ""}
            min="0"
          />
          <label htmlFor="quantity">kg</label>
        </div>
        <button type="submit">Add To Cart</button>
      </form>
      <p className="product-number"> Atomic Number: {product.number}</p>
    </div>
  );
};

export default Product;
