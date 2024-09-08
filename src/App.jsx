import React from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:product_id" element={<ProductDetail />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
