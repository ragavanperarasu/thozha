import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import ProductDetail from "./screens/ProductDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/product/:productId" element={<ProductDetail />} />
    </Routes>
  );
}

export default App;
