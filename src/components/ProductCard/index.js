import React from "react";
import { BsBookmark } from "react-icons/bs";

import "./index.css";

function ProductCard(props) {
  const { product } = props;
  const { title, img, discountPrice, originalPrice } = product;
  return (
    <li className="product-card">
      <div className="product-img-container">
        <img className="product-img" src={img} alt={title} />
        <button className="product-card-bookmark-button" type="button">
          <BsBookmark />
        </button>
      </div>
      <div className="product-details">
        <h4 className="product-title">{title}</h4>
        <div className="product-price-details-container">
          <div className="product-price-details">
            <p className="product-discount-price">₹{discountPrice}</p>
            <p className="product-original-price">{originalPrice}</p>
            <p className="product-discount-percentage">(50% off)</p>
          </div>
          <button className="product-add-to-cart-button" type="button">
            <img
              src="https://res.cloudinary.com/dzduqsp2x/image/upload/v1713161228/Group_450_mko2wu.png"
              alt="add-to-cart-img"
              className="product-add-to-cart-button-image"
            />
          </button>
        </div>
      </div>
    </li>
  );
}

export default ProductCard;
