import React from "react";
import {Article} from "../../components/article/Article";

function Blog() {
  return (
    <section className="flex-container sections-container">
      <h2>Aprende recetas, consejos y tips de cocina en esta sección</h2>
      <h4>Artículos recientes...</h4>
      <Article />
    </section>
  );
}

export { Blog };
