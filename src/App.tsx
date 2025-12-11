import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
