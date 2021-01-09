import "./App.css";
import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import MetalMart from "./components/MetalMart";
import Store from "./components/Store";
import Cart from "./components/Cart";
import Nav from "./components/Nav";
import inventory from "./inventory";

const App = () => {
  const [cart, setCart] = useState([]);

  const [data, setData] = useState(inventory);

  const addOne = () => {
    const newData = { ...data };
    newData.quantity = data.quantity + 1;
    setData(newData);
  };

  return (
    <div className="App">
      <Nav cart={cart} />
      <Switch>
        <Route path="/" exact>
          <MetalMart />
        </Route>
        <Route path="/store">
          <Store data={data} addOne={addOne} />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
