/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ContentLoader from "react-content-loader";

import "../../styles/product.scss";
import ProductCard from "../product/ProductCard";
import { fetchProductList } from "../../duck/product/services";
import { AppContext } from "../../context";
import Container from "../../layout/Container";
import SectionTitle from "../../layout/SectionTitle";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsername } from "../../duck/users/services";

// eslint-disable-next-line no-unused-vars
const Products = () => {
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate();

  // ?Way of getting data from contextApi
  // const { products } = useContext(AppContext);

  const dispatch = useDispatch();
  const { products, isLoading, hasError } = useSelector((state) => {
    return {
      products: state.product.payload,
      isLoading: state.product.loading,
      hasError: state.product.error,
    };
  });
  useEffect(() => {
    dispatch(fetchProductList());
    dispatch(fetchUsername());
  }, []);

  return (
    <Container>
      <SectionTitle title={"Our Products"} />
      <section className="product-container">
        {isLoading ? (
          <div className="loader-wrapper">
            <ContentLoader
              viewBox="0 0 1240 400"
              width={"100%"} // Adjust width for responsiveness
              height={"100%"}
            >
              <rect x="30" y="20" rx="8" ry="8" width="200" height="200" />
              <rect x="30" y="250" rx="0" ry="0" width="200" height="18" />
              <rect x="30" y="275" rx="0" ry="0" width="120" height="20" />
              <rect x="250" y="20" rx="8" ry="8" width="200" height="200" />
              <rect x="250" y="250" rx="0" ry="0" width="200" height="18" />
              <rect x="250" y="275" rx="0" ry="0" width="120" height="20" />
              <rect x="470" y="20" rx="8" ry="8" width="200" height="200" />
              <rect x="470" y="250" rx="0" ry="0" width="200" height="18" />
              <rect x="470" y="275" rx="0" ry="0" width="120" height="20" />
              <rect x="690" y="20" rx="8" ry="8" width="200" height="200" />
              <rect x="690" y="250" rx="0" ry="0" width="200" height="18" />
              <rect x="690" y="275" rx="0" ry="0" width="120" height="20" />
              <rect x="910" y="20" rx="8" ry="8" width="200" height="200" />
              <rect x="910" y="250" rx="0" ry="0" width="200" height="18" />
              <rect x="910" y="275" rx="0" ry="0" width="120" height="20" />
              <rect x="1130" y="20" rx="8" ry="8" width="200" height="200" />
              <rect x="1130" y="250" rx="0" ry="0" width="200" height="18" />
              <rect x="1130" y="275" rx="0" ry="0" width="120" height="20" />
            </ContentLoader>
          </div>
        ) : products.length > 0 ? (
          products?.map((product) => {
            return (
              <ProductCard
                onClick={() => navigate(`/product/${product.id}`)}
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
          })
        ) : (
          <p>No Data</p>
        )}
      </section>
    </Container>
  );
};

export default Products;
