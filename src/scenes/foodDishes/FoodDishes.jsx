import React from "react";
import "./style/foodDishes.css";

import { Card } from "../../components/card/Card";

import pizzaimg from "./img/pizza.jpg";
import pastaimg from "./img/pasta.jpg";
import baguetteimg from "./img/baguette.jpg";
import lasañaimg from "./img/lasaña.jpg";

function FoodDishes() {
  return (
    <section className="flex-container sections-container">
      <h1>Nuestro menú de comidas</h1>
      <div className="food-container sections-container">
        <Card
          name="Pizza"
          ingredients="Peperoni, queso, salsa de tomate, orilla rellena"
          price="$250 mxn"
          image={pizzaimg}
        />

        <Card
          name="Pasta"
          ingredients="Pasta italiana, queso rayado, salsa de tomate"
          price="$150 mxn por plato"
          image={pastaimg}
        />

        <Card
          name="Baguette"
          ingredients="Peperoni, queso, pan, lechuga y verduras"
          price="$120 mxn"
          image={baguetteimg}
        />

        <Card
          name="Lasaña"
          ingredients="Pasta para lasaña, verdura, salsa de tomate"
          price="$180 mxn por plato"
          image={lasañaimg}
        />
      </div>
    </section>
  );
}

export { FoodDishes };
