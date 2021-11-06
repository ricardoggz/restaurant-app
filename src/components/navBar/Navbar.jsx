import React from "react";
import { Link } from "react-router-dom";
import { RiMenu4Line } from "react-icons/ri";
import "./style/navBar.css";
import Logo from "./img/Logo.png";

const NavBar = () => {
  return (
    <header>
      <div className="flex-container nav_bar">
        <img src={Logo} alt="Restaurant-App" className="nav_bar_logo" />
        <nav>
          <input type="checkbox" id="menu" />
          <label htmlFor="menu" className="bar-btn">
            <RiMenu4Line />
          </label>
          <ul className="nav_bar_list">
            <li>
              <Link to="#" className="link">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="#" className="link">
                Información
              </Link>
            </li>
            <li>
              <Link to="#" className="link">
                Comidas
              </Link>
            </li>
            <li>
              <Link to="#" className="link">
                Blog
              </Link>
            </li>
            <li>
              <Link to="#" className="link">
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export { NavBar };
