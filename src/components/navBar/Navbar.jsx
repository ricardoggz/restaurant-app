import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import { RiMenu4Line } from "react-icons/ri";


import "./style/navBar.css";
import logo from "./img/Logo.png";

import { Home } from "../../scenes/home/Home";
import {FoodDishes} from "../../scenes/foodDishes/FoodDishes";
import { Blog } from "../../scenes/blog/Blog";
import {Reservation} from "../../scenes/reservation/Reservation";

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
            <li><Link to="/fooddishes" className="link">Comidas</Link></li>
            <li><Link to="/blog" className="link">Blog</Link></li>
            <li><Link to="/reservation" className="link">Reserva</Link></li>
          </ul>
        </nav>
      </div>
    </header>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>

    <Routes>
      <Route exact path="/fooddishes" element={<FoodDishes/>}/>
    </Routes>

    <Routes>
      <Route exact path="/blog" element={<Blog />}/>
    </Routes>

    <Routes>
      <Route exact path="/reservation" element={<Reservation />}/>
    </Routes>
    </Router>
  );
};

export { NavBar };
