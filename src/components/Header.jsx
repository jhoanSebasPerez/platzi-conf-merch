import { Link } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../context/AppContext";
import "../styles/components/Header.css";

function Header() {
  const {
    state: { cart },
  } = useContext(AppContext);

  const totalItems =
    cart.length > 0 && cart.reduce((acc, curr) => acc + curr.qty, 0);

  return (
    <div className="Header">
      <Link to="/">
        <h1 className="Header-title">PlatziConf Merch</h1>
      </Link>
      <Link to="/checkout">
        <div className="Header-checkout">
          <i className="fa-solid fa-cart-shopping"></i>
          {totalItems > 0 && <div className="Header-alert">{totalItems}</div>}
        </div>
      </Link>
    </div>
  );
}

export default Header;
