// /* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { API_URL } from "../utils/constands";

export const AppContext = createContext("");

export const AppContextProvider = (prop) => {
  const [products, setProductData] = useState([]);
  const fetchProduct = async () => {
    try {
      const data = await fetch(`${API_URL}products?limit=15`);
      const response = await data.json();
      if (response?.length > 0) {
        // setProductData((prevState) => [...prevState, ...response]);
        setProductData(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const state = { products };

  return (
    <AppContext.Provider value={{ ...state, fetchProduct: fetchProduct }}>
      {prop.children}
    </AppContext.Provider>
  );
};
