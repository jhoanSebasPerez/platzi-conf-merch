import { useContext } from "react";
import AppContext from "../context/AppContext";
import Map from "../components/Map";
import "../styles/components/Success.css";

const Success = () => {
  const {
    state: { buyer },
  } = useContext(AppContext);

  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{buyer.name}, Gracias por tu compra</h2>
        <span>Tu pedido lelgara en 3 dias a tu direccion:</span>
        <div className="Success-map"></div>
        <Map />
      </div>
    </div>
  );
};

export default Success;
