import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
  // const { cart } = useSelector((store) => store.cart);
  // console.log(cart);
  return (
    <div>
      <div className="navbar bg-blue-950 pl-10 pr-10">
        <Link className="text-2xl font-semibold text-white" to="/">
          NewMarket
        </Link>
        <nav className="text-white">
          <ul className="navbar__list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              {" "}
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
