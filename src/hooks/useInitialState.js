import { useState } from "react";

const useInitialState = (initialState) => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    const copyCart = [...state.cart];
    const index = copyCart.findIndex((el) => el.id === payload.id);

    if (index >= 0) {
      copyCart[index].qty += 1;
    } else {
      copyCart.push({ ...payload, qty: 1 });
    }

    setState({
      ...state,
      cart: copyCart,
    });
  };

  const removeItem = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((item) => item.id !== payload.id),
    });
  };

  const addToBuyer = (payload) => {
    setState({
      ...state,
      buyer: { ...payload },
    });
  };

  const addNewOrder = (payload) => {
    setState({
      ...state,
      orders: [...state.orders, payload],
    });
  };

  return { state, addToCart, removeItem, addToBuyer, addNewOrder };
};

export default useInitialState;
