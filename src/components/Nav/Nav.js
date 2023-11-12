import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/icons_assets/Logoo.svg";
import Hamburger from "../../assets/icons_assets/ЁЯжЖ icon _hamburger menu.svg";

import "./Nav.css";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navBar ${menuOpen ? "open" : ""}`}>
      <Link to="/">
        <img
          src={Logo}
          alt="little-lemon logo"
          style={{ height: 50, width: 200 }}
        />
      </Link>

      <div className="menu-icon" onClick={toggleMenu}>
        <img src={Hamburger} alt="" />
      </div>

      <ul className={`nav-list ${menuOpen ? "visible" : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/">Menu</Link>
        </li>
        <li>
          <Link to="/booking">Reservations</Link>
        </li>
        <li>
          <Link to="/">Order Online</Link>
        </li>
        <li>
          <Link to="/">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
