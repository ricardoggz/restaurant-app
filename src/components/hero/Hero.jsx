import React from "react";
import { Button } from "../button/Button";
import { Link } from "react-router-dom";
import "./style/hero.css";
import pizzadish from "./img/pizza-dish.jpg";

function Hero() {
  return (
    <section className="hero_container flex-container sections-container">
      <div>
        <figure>
          <img src={pizzadish} alt="Un estómago vacío es un mal consejero" />
        </figure>
      </div>
      <div className="titles">
        <span>En esta cocina pasan cosas mágicas...</span>
        <p>"Goza inteligentemente de los placeres de la vida"</p>
        <Link to="/dishes">
          <Button title="Ver comidas" />
        </Link>
      </div>
    </section>
  );
}
export { Hero };
