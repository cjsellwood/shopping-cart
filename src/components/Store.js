import React from "react";
import "./Store.css";

const Store = (props) => {
  const itemsArray = props.data.map((item) => (
    <div>
      <h1>{item.number}: {item.name} </h1>
      <img className="product-image" src={item.src} alt={item.name} />
    </div>
  ));
  return <div>{itemsArray}</div>;
};

export default Store;
