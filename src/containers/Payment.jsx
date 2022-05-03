import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../context/AppContext";
import { PayPalButton } from "react-paypal-button-v2";
import { getTotalPrice } from "../utils/getTotalPrice";
import "../styles/components/Payment.css";

const Payment = () => {
  const {
    state: { cart, buyer },
    addNewOrder,
  } = useContext(AppContext);

  const navigate = useNavigate();

  const paypalOptions = {
    clientId: import.meta.env.VITE_CLIENT_ID_PAYPAL,
    intent: "capture",
    currency: "USD",
  };
  const buttonStyles = {
    layout: "vertical",
    shape: "rect",
  };

  const handlePaymentSuccess = (details) => {
    console.log(details);
    if (details.status === "COMPLETED") {
      const newOrder = {
        buyer,
        products: cart,
        payment: details,
      };
      addNewOrder(newOrder);
      navigate("/checkout/success");
    }
  };

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resument del pedido:</h3>
        <PayPalButton
          options={paypalOptions}
          style={buttonStyles}
          amount={getTotalPrice(cart)}
          onPaymentStart={() => console.log("Start Payment")}
          onSuccess={(details) => handlePaymentSuccess(details)}
          onError={(error) => console.log(error)}
          onCancel={(data) => console.log(data)}
        />
      </div>
      <div />
    </div>
  );
};

export default Payment;
