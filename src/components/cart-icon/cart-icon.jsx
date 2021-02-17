import React from "react";
import shoppingBag from "../../assets/shopping-bag.png";
import "./cart-icon.styles.scss";

export const CartIcon = () => {
  return (
    <div className="cart-container">
      <img src={shoppingBag} alt="shopping-cart-icon" />
      <span className="cart-count"> 5 </span>
    </div>
  );
};
