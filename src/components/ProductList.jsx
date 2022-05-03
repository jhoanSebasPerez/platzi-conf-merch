import { useContext } from "react";
import AppContext from "../context/AppContext";
import "../styles/components/Products.css";
import Product from "./Product";

function ProductList() {
  const {
    state: { products },
    addToCart,
  } = useContext(AppContext);

  return (
    <div className="Products">
      <div className="Products-items">
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
