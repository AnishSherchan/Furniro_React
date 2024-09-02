/* eslint-disable react/prop-types */
import { useContext } from "react";

import "../../styles/product.scss";
import ProductCard from "../product/ProductCard";

import { AppContext } from "../../context";
import Container from "../../layout/Container";
import SectionTitle from "../../layout/SectionTitle";

// eslint-disable-next-line no-unused-vars
const Products = () => {
  // eslint-disable-next-line no-unused-vars
  const { products } = useContext(AppContext);

  return (
    <Container>
      <SectionTitle title={"Our Products"} />
      <section className="product-container">
        {products?.map((product) => {
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
    </Container>
  );
};

export default Products;
