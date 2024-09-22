import React from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:product_id" element={<ProductDetail />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
