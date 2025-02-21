import { Routes, Route } from "react-router-dom";
import NavbarPage from "./components/NavbarPage";
import AxiosInstance from "./components/AxiosInstance";
import { useEffect, useState } from "react";
import HomePage from "./components/HomePage";
import AOS from "aos";
import "aos/dist/aos.css";
import CreateData from "./components/CreateData";
import SinglePage from "./components/SinglePage";
import CartPage from "./components/CartPage";
import SellectedPage from "./components/SellectedPage";
import ProductsPage from "./components/ProductsPage";

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    AOS.init();
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <>
      <NavbarPage />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/create-data" element={<CreateData />} />
        <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
        <Route path="/selected" element={<SellectedPage />} />
        <Route path="/product/:id" element={<SinglePage addToCart={addToCart} />} /> {/* ✅ To‘g‘ri path */}
      </Routes>
    </>
  );
}

export default App;
