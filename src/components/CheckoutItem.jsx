import React from "react";
import "../styles/components/CheckoutItem.css";

function CheckoutItem({ item, removeItem }) {
  return (
    <div className="Checkout-item">
      <div className="Checkout-element">
        <img src={item.image} alt={item.title} />
        <h4>{item.title}</h4>
        <span>Qty: {item.qty}</span>
        <span>${item.price}</span>
      </div>
      <button type="button" onClick={() => removeItem(item)}>
        <i className="fa-solid fa-trash"></i>
      </button>
    </div>
  );
}

export default CheckoutItem;
