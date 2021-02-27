import React, { createContext, useReducer } from "react";
import { cartReducer } from "./cart-reducer";

export const CartContext = createContext();

const initialState = { cartItems: [], itemCount: 0, total: 0 };

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const addProduct = (product) =>
    dispatch({ type: "ADD_ITEM", payload: product });
  const increase = (product) =>
    dispatch({ type: "INCREASE", payload: product });
  const decrease = (product) =>
    dispatch({ type: "DECREASE", payload: product });
  const removeProduct = (product) =>
    dispatch({ type: "REMOVE_ITEM", payload: product });

  const contextValues = {
    ...state,
    addProduct,
    increase,
    decrease,
    removeProduct,
  };

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};
