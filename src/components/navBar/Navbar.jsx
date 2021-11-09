import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import { RiMenu4Line } from "react-icons/ri";


import "./style/navBar.css";
import logo from "./img/Logo.png";

import { Home } from "../../scenes/home/Home";
import {FoodDishes} from "../../scenes/foodDishes/FoodDishes";

const NavBar = () => {
  return (
    <Router>
    <header>
      <div className="flex-container nav_bar">
        <img src={logo} alt="Restaurant-App" className="nav_bar_logo" />
        <nav>
          <input type="checkbox" id="menu" />
          <label htmlFor="menu" className="bar-btn">
            <RiMenu4Line />
          </label>
          <ul className="nav_bar_list">
            <li><Link to="/" className="link">Inicio</Link></li>
            <li><Link to="/dishes" className="link">Comidas</Link></li>
            <li><Link to="#" className="link">Blog</Link></li>
            <li><Link to="#" className="link">Reserva</Link></li>
          </ul>
        </nav>
      </div>
    </header>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>

    <Routes>
      <Route exact path="/dishes" element={<FoodDishes/>}/>
    </Routes>
    </Router>
  );
};

export { NavBar };
