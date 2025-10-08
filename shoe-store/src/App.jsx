import { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Card from "./components/Card";
import products from "../src/assets/products";
import Cart from "./components/Cart";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    const existItem = cartItems.find((item) => item.id === product.id);
    if (existItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const increaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  const decreaseQuantity = (id) => {
    setCartItems(
      cartItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="grid grid-cols-2 gap-5 w-[50rem] p-10">
          {products.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              shoeImage={item.shoeImage}
              shoeName={item.shoeName}
              shoePrice={item.shoePrice}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>
        <div>
          <Cart
            items={cartItems}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
          />
        </div>
      </div>
    </>
  );
}

export default App;
