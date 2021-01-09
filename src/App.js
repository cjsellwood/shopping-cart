import "./App.css";
import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import MetalMart from "./components/MetalMart";
import Store from "./components/Store";
import Cart from "./components/Cart";
import Nav from "./components/Nav";
import inventory from "./inventory";
import Product from "./components/Product";

const App = () => {
  const [cart, setCart] = useState([]);

  const [data, setData] = useState(inventory);
  const [currentQuantity, setCurrentQuantity] = useState(0);

  const addOne = () => {
    const newData = { ...data };
    newData.quantity = data.quantity + 1;
    setData(newData);
  };

  // Duplicate data array with deep cloning
  const duplicateData = (array) => {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
      newArray.push({ ...array[i] });
    }
    return newArray;
  };

  // Change quantity before adding to cart
  const changeQuantity = (e) => {
    // const index = e.target.getAttribute("data-index");
    // const dataCopy = duplicateData(data);
    // dataCopy[index].quantity = e.target.value;
    // console.log(dataCopy[index])
    // setData(dataCopy);
    setCurrentQuantity(Number(e.target.value));
  };

  // Add to cart submission
  const addToCart = (e) => {
    e.preventDefault();
    const value = currentQuantity;
    setCurrentQuantity(0);
    // Exit if 0 or less
    console.log(value);
    if (value <= 0) {
      return;
    }
    const dataCopy = duplicateData(data);
    const index = e.target.getAttribute("data-index");
    dataCopy[index].quantity += value;
    setData(dataCopy);
    console.log(data);
  };

  return (
    <div className="App">
      <Nav cart={cart} />
      <Switch>
        <Route path="/" exact>
          <MetalMart />
        </Route>
        <Route exact path="/store">
          <Store data={data} addOne={addOne} />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/store/:name">
          <Product
            currentQuantity={currentQuantity}
            changeQuantity={(e) => changeQuantity(e)}
            data={data}
            addToCart={(e) => addToCart(e)}
          />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
