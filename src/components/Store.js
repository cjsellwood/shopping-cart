import React from "react";
import { Link } from "react-router-dom";
import "./Store.css";

const Store = (props) => {
  const itemsArray = props.data.map((item) => (
    <Link to={{
      pathname: `/store/${item.name}`
    }} className="store-item" key={item.number}>
      <img className="product-image" src={item.src} alt={item.name} />
      <div className="product-details">
        <h2>{item.name}</h2>
        <h2>
          $
          {props.formatPrice(item.price)}
        </h2>
      </div>
    </Link>
  ));
  return <div className="store-container">{itemsArray}</div>;
};

export default Store;
