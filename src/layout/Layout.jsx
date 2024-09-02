/* eslint-disable react/prop-types */
import { useContext, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { AppContext } from "../context";

const Layout = ({ children }) => {
  const { fetchProduct } = useContext(AppContext);

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
