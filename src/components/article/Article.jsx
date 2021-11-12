import React from "react";
import axios from "axios";
import "./style/article.css";
import cooking from "./img/cooking.jpg";
import { Button } from "../button/Button";

function Article() {
  const API_URL = "https://jsonplaceholder.typicode.com/posts/1";
  axios
    .get(API_URL)
    .then(
      ({ data }) =>
        (document.getElementById("article").innerHTML = `<ul>
        <li><b>Autor:</b> ${data.id}</li>
        <li><b>Artículos:</b> ${data.userId}</li>
        <li><b>Título:</b> ${data.title}</li>
        <li><b>Descripción:</b> ${data.body}</li>
        </ul>`)
    )
    .catch("Error 404 page not found");
  return (
    <>
      <div className="card-article">
        <div id="article"></div>
        <div className="imgarticle">
          <img src={cooking} alt="loading" />
          <Button title="Leer artículo completo" />
        </div>
        <br />
      </div>
    </>
  );
}

export { Article };
