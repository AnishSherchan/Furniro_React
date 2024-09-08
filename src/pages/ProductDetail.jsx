import { useParams } from "react-router";

import Container from "../layout/Container";

const ProductDetail = () => {
  const { product_id } = useParams();
  console.log(product_id);

  return (
    <Container>
      <h1>Product Detail id {product_id}</h1>
    </Container>
  );
};

export default ProductDetail;
