import React from "react";
import { useState, useEffect } from "react";
import "../../styles/components/ProductCard.scss";
import TestImage from "../../assets/image.png";

const ProductCard = () => {
  // eslint-disable-next-line no-unused-vars
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    try {
      console.log("object");
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <React.Fragment>
      <div className="product__images-item">
        <div className="product-image-container">
          <img src={TestImage} alt="Syltherine" />
          <span className="product-discount label">-20%</span>
        </div>
        <div className="product-overlay">
          <button>Add to cart</button>
          <div className="user-controls">
            <p>
              <img
                src="public/assets/UserInteraction/gridicons_share.png"
                alt="Share"
                height="16px"
                width="16px"
              />
              Share
            </p>
            <p>
              <img
                src="public/assets/UserInteraction/compare-svgrepo-com 1.png"
                alt="Compare"
                height="16px"
                width="16px"
              />
              Compare
            </p>
            <p>
              <img
                src="public/assets/UserInteraction/Heart.png"
                alt="Like"
                height="16px"
                width="16px"
              />
              Like
            </p>
          </div>
        </div>
        <div className="product__images-desc">
          <h3>Syltherine</h3>
          <p>Stylish cafe chair</p>
          <div className="price">
            <span className="discounted-price">Rp 2.500.000</span>
            <span className="actual-price">Rp 3.500.000</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductCard;
