import "./App.css";
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import MetalMart from "./components/MetalMart";
import Store from "./components/Store";
import Cart from "./components/Cart";
import Nav from "./components/Nav";
import inventory from "./inventory";
import Product from "./components/Product";
import ScrollToTop from "./ScrollToTop";

const App = () => {
  const [cart, setCart] = useState([]);

  const storeCart = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }

  // Get cart from local storage
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart !== null) {
      setCart(JSON.parse(storedCart));
    }
  }, []);
  const [data] = useState(inventory);
  const [currentQuantity, setCurrentQuantity] = useState(0);

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
    setCurrentQuantity(Number(e.target.value));
  };

  // Add to cart submission
  const addToCart = (e) => {
    e.preventDefault();
    const value = currentQuantity;
    setCurrentQuantity(0);

    // Exit if 0 or less
    if (value <= 0) {
      return;
    }

    // Index in data array
    const index = e.target.getAttribute("data-index");
    const name = data[index].name;
    const cartCopy = duplicateData(cart);

    // Return product matching name from data
    const cartProduct = cartCopy.filter((item) => {
      return item.name === name;
    })[0];

    // Find if product already in cart array
    const cartIndex = cartCopy.indexOf(cartProduct);

    // Add new if wasn't found in cart array
    if (cartIndex === -1) {
      cartCopy.push(data[index]);
      cartCopy[cartCopy.length - 1].quantity = value;

      // Else add to already added product
    } else {
      cartCopy[cartIndex].quantity += value;
    }
    setCart(cartCopy);
    storeCart(cartCopy);
  };

  // Format to 2 decimal places and with commas every 3 digits
  const formatPrice = (price) => {
    return Number(price.toFixed(2)).toLocaleString(undefined, {
      minimumFractionDigits: 2,
    });
  };

  // Remove item from cart
  const removeItem = (e) => {
    e.preventDefault();
    const index = e.target.getAttribute("data-index");
    const cartCopy = duplicateData(cart);
    cartCopy.splice(index, 1);
    setCart(cartCopy);
    storeCart(cartCopy);
  };

  // Ideas:
  // Sort Store button
  // Dark Mode
  // Show added to cart better

  return (
    <div className="App">
      <ScrollToTop />
      <Nav cart={cart} />
      <Switch>
        <Route path="/" exact>
          <MetalMart />
        </Route>
        <Route exact path="/store">
          <Store data={data} formatPrice={formatPrice} />
        </Route>
        <Route path="/cart">
          <Cart
            cart={cart}
            formatPrice={formatPrice}
            removeItem={(e) => removeItem(e)}
          />
        </Route>
        <Route path="/store/:name">
          <Product
            currentQuantity={currentQuantity}
            changeQuantity={(e) => changeQuantity(e)}
            data={data}
            addToCart={(e) => addToCart(e)}
            formatPrice={formatPrice}
          />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
