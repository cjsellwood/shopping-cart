import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MetalMart from "./components/MetalMart";
import Store from "./components/Store";
import Cart from "./components/Cart";
import App from "./App"

const Routes = () => {
  return (
    <BrowserRouter>
      <App/>
      <Switch>
        <Route path="/" exact component={MetalMart}/>
        <Route path="/store" component={Store} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
