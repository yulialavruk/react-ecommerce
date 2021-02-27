import React, { useContext } from "react";
import { CartContex, CartContext } from "../../../context/cart-context";
import { Layout } from "../../shared/layout";
import { CartItem } from "./cart-items";
import Total from "./total";
import "./cart-page.styles.scss";

export const CartPage = () => {
  const { cartItems, itemCount, total } = useContext(CartContext);

  return (
    <Layout>
      <>
        <h1>Cart</h1>
        {cartItems.length === 0 ? (
          <div className="empty-cart">Your cart is empty</div>
        ) : (
          <>
            <div className="cart-page">
              <div className="cart-item-container">
                {cartItems.map((item) => (
                  <CartItem {...item} key={item.id} />
                ))}
              </div>
              <Total itemCount={itemCount} total={total} />
            </div>
          </>
        )}
      </>
    </Layout>
  );
};
