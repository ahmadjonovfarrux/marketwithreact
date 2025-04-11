import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="navbar bg-blue-950 pl-10 pr-10">
        <Link className="text-2xl font-semibold text-white" to="/">
          NewMarket
        </Link>
        <nav className="text-white">
          <ul>
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
