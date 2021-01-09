import React from "react";

const Store = (props) => {
  console.log(props.location.state);
  return (
    <div>
      Store
      <p>{props.location.state.name}</p>
      <p>{props.location.state.quantity}</p>
      <button onClick={props.location.state.addOne}>Add One</button>
    </div>
  );
};

export default Store;
