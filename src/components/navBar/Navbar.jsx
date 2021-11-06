import React from "react";
import "./style/navBar.css";
import Logo from "./img/Logo.png";

const NavBar = () => {
  return (
    <header>
      <div className="flex-container nav_bar">
        <img src={Logo} alt="Restaurant-App" className="nav_bar_logo"/>
        <nav>
          <ul className="nav_bar_list">
            <li>Inicio</li>
            <li>Sobre nosotros</li>
            <li>Contacto</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export { NavBar };
