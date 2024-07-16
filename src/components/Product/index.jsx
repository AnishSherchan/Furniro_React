/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

import "../../styles/components/product.scss";
import ProductCard from "./ProductCard";

import { API_URL } from "../../utils/constands";

// eslint-disable-next-line no-unused-vars
const Products = ({ limit }) => {
  // eslint-disable-next-line no-unused-vars
  const [productData, setProductData] = useState([]);
  const fetchProduct = async () => {
    try {
      const data = await fetch(
        `${API_URL}products${limit ? `?limit=${limit}` : ""}`
      );
      const response = await data.json();
      if (response?.length > 0) {
        setProductData((prevState) => [...prevState, ...response]);
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(productData);
  useEffect(() => {
    fetchProduct();
  }, []);
  console.log(productData);

  return (
    <section className="product-container">
      {productData?.map((product) => {
        return (
          <ProductCard
            key={product.id}
            title={
              product.title.length > 15
                ? product.title.substring(0, 12) + "..."
                : product.title
            }
            desc={
              product.description.length > 20
                ? product.description.substring(0, 22) + "..."
                : product.description
            }
            price={product.price}
            imgUrl={product.image}
          />
        );
      })}
    </section>
  );
};

export default Products;
