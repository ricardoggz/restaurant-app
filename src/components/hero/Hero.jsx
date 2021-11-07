import React from "react";
import "./style/hero.css";
import dishimg from "./img/dish.jpg";

function Hero() {
  return (
    <section className="home_container">
      <div>
        <img src={dishimg} alt="Un estómago vacío es un mal consejero" />
      </div>
      <div>
        <span className="title_home">
          En esta cocina pasan cosas mágicas...
        </span>
        <p className="subtitle_home">
          "Goza inteligentemente de los placeres de la vida"
        </p>
      </div>
    </section>
  );
}
export { Hero };
