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

function App() {
  const globalState = useInitialState(initialState);

  return (
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
  );
}

export default App;
