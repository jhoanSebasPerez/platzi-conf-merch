import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../context/AppContext";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { getTotalPrice } from "../utils/getTotalPrice";
import "../styles/components/Payment.css";

const Payment = () => {
  const {
    state: { cart, buyer },
    addNewOrder,
  } = useContext(AppContext);

  const navigate = useNavigate();

  /*   const paypalOptions = {
    clientId: import.meta.env.VITE_CLIENT_ID_PAYPAL,
    intent: "capture",
    currency: "USD",
  }; */
  const buttonStyles = {
    layout: "vertical",
    /*  shape: "rect", */
  };

  const handlePaymentSuccess = (details) => {
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
        {/* <PayPalButton
          options={paypalOptions}
          style={buttonStyles}
          amount={getTotalPrice(cart)}
          onPaymentStart={() => console.log("Start Payment")}
          onSuccess={(details) => handlePaymentSuccess(details)}
          onError={(error) => console.log(error)}
          onCancel={(data) => console.log(data)}
        /> */}
        <PayPalButtons
          style={buttonStyles}
          fundingSource={undefined}
          createOrder={(data, actions) => {
            return actions.order
              .create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: "USD",
                      value: getTotalPrice(cart),
                    },
                  },
                ],
              })
              .then((orderId) => {
                return orderId;
              });
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then((details) => {
              handlePaymentSuccess(details);
            });
          }}
        />
      </div>
      <div />
    </div>
  );
};

export default Payment;
