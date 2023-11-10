import React, { useState } from "react";
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
      <a href="/">
        <img
          src={Logo}
          alt="little-lemon logo"
          style={{ height: 50, width: 200 }}
        />
      </a>

      <div className="menu-icon" onClick={toggleMenu}>
        <img src={Hamburger} alt="" />
      </div>

      <ul className={`nav-list ${menuOpen ? "visible" : ""}`}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Menu</a>
        </li>
        <li>
          <a href="#">Reservations</a>
        </li>
        <li>
          <a href="#">Order Online</a>
        </li>
        <li>
          <a href="#">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
