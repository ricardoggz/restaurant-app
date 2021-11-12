import React from "react";
import { Button } from "../button/Button";
import { Link } from "react-router-dom";
import "./style/hero.css";

function Hero() {
  return (
    <section className="hero_container">
      <div className="titles">
        <span>En esta cocina pasan cosas mágicas...</span>
        <p>"Goza inteligentemente de los placeres de la vida"</p>
        <Link to="/fooddishes">
          <Button title="Ver comidas" />
        </Link>
      </div>
    </section>
  );
}
export { Hero };
