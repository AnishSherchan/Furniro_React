/* eslint-disable react/prop-types */
import React from "react";
import "../../styles/ProductCard.scss";
import { ShareIcon, HeartIcon, CompareIcon } from "../../assets";

const ProductCard = ({ id, imgUrl, title, desc, price }) => {
  return (
    <React.Fragment>
      <div className="product__images-item" key={id}>
        <div className="product-image-container">
          <img src={imgUrl} alt={title} />
        </div>
        <div className="product-overlay">
          <button>Add to cart</button>
          <div className="user-controls">
            <p>
              <img src={ShareIcon} alt="Share" height="16px" width="16px" />
              Share
            </p>
            <p>
              <img src={CompareIcon} alt="Compare" height="16px" width="16px" />
              Compare
            </p>
            <p>
              <img src={HeartIcon} alt="Like" height="16px" width="16px" />
              Like
            </p>
          </div>
        </div>
        <div className="product__images-desc">
          <h3>{title}</h3>
          <p>{desc}</p>
          <div className="price">
            <span className="discounted-price">{price}</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductCard;
