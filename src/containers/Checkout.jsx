import { useContext } from "react";
import AppContext from "../context/AppContext";
import { Link } from "react-router-dom";
import CheckoutItem from "../components/CheckoutItem";
import { getTotalPrice } from "../utils/getTotalPrice";
import "../styles/components/Checkout.css";

function Checkout() {
  const {
    state: { cart },
    removeItem,
  } = useContext(AppContext);

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        <h3>Lista de Pedidos:</h3>
        {cart.length === 0 ? (
          <p>Sin articulos</p>
        ) : (
          cart.map((item) => (
            <CheckoutItem
              key={`cartItem-${item.id}`}
              item={item}
              removeItem={removeItem}
            />
          ))
        )}
      </div>
      <div className="Checkout-sidebar">
        <h3>Precio Total: ${getTotalPrice(cart)}</h3>
        <Link to="/checkout/information">
          <button type="button">Continuar pedido</button>
        </Link>
      </div>
    </div>
  );
}

export default Checkout;
