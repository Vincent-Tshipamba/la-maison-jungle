import Cart from "./Cart";
import Banner from "./Banner";
import ShoppingList from "./ShoppingList";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import Categories from "./Categories";

const App = () => {
  const [cat, setCategory] = useState('')
  const savedCart = localStorage.getItem('cart')
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  return (
    <>
      <Banner />
      <Cart cat={cat} cart={cart} updateCart={updateCart} />
      <Categories setCategory={setCategory} />
      <ShoppingList category={cat} cart={cart} updateCart={updateCart} />
      <Footer />
    </>
  );
};

export default App;