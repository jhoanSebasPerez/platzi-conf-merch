import { useRef, useContext } from "react";
import AppContext from "../context/AppContext";
import { Link, useNavigate } from "react-router-dom";
import { getTotalPrice } from "../utils/getTotalPrice";
import "../styles/components/Information.css";

const Information = () => {
  const {
    state: { cart },
    addToBuyer,
  } = useContext(AppContext);
  const form = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      name: formData.get("name"),
      email: formData.get("email"),
      address: formData.get("address"),
      apto: formData.get("apto"),
      city: formData.get("city"),
      country: formData.get("country"),
      state: formData.get("state"),
      cp: formData.get("cp"),
      phone: formData.get("phone"),
    };
    addToBuyer(buyer);
    navigate("/checkout/payment");
  };

  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Informacion de contacto:</h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
            <input type="text" placeholder="Nombre completo" name="name" />
            <input type="text" placeholder="Correo Electronico" name="email" />
            <input type="text" placeholder="Direccion" name="address" />
            <input type="text" placeholder="Apto" name="apto" />
            <input type="text" placeholder="Ciudad" name="city" />
            <input type="text" placeholder="Pais" name="country" />
            <input type="text" placeholder="Estado" name="state" />
            <input type="text" placeholder="Codigo postal" name="cp" />
            <input type="text" placeholder="Telefono" name="phone" />
          </form>
        </div>
        <div className="Information-buttons">
          <Link to="/checkout">
            <div className="Information-back">Regresar</div>
          </Link>
          <div className="Information-next">
            <button type="button" onClick={handleSubmit}>
              Pagar
            </button>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        {cart.map((item) => (
          <div className="Information-item" key={item.title}>
            <div className="Information-element">
              <h4>{item.title}</h4>
              <p>Qty: {item.qty}</p>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
        <h3>Precio total: {getTotalPrice(cart)}</h3>
      </div>
    </div>
  );
};

export default Information;
