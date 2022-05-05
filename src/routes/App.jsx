import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  Checkout,
  Information,
  Payment,
  Success,
  NotFound,
} from "../containers";
import Layout from "../components/Layout";
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";
import initialState from "../initialState";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

function App() {
  const globalState = useInitialState(initialState);
  const clientId = import.meta.env.VITE_CLIENT_ID_PAYPAL;
  const paypalOptions = {
    "client-id": clientId,
    components: "buttons",
    currency: "USD",
  };

  return (
    <>
      <PayPalScriptProvider options={paypalOptions}>
        <AppContext.Provider value={globalState}>
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="checkout" element={<Checkout />} />
                <Route path="checkout/information" element={<Information />} />
                <Route path="checkout/payment" element={<Payment />} />
                <Route path="checkout/success" element={<Success />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          </BrowserRouter>
        </AppContext.Provider>
      </PayPalScriptProvider>
    </>
  );
}

export default App;
