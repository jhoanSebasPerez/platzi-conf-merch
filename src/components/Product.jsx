import React from "react";

function Product({ product, addToCart }) {
  return (
    <div className="Products-item">
      <img src={product.image} alt={product.title} />
      <div className="Product-item-info">
        <h2>
          {product.title} <span>$ {product.price}</span>
        </h2>
        <p>{product.description}</p>
      </div>
      <button type="button" onClick={() => addToCart(product)}>
        Add to cart
      </button>
    </div>
  );
}

export default Product;
