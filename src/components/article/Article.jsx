import React, { Component } from "react";
import axios from "axios";
import "./style/article.css";

import imgarticle from "./img/imgarticle.jpg";

import { Button } from "../button/Button";
class Article extends Component {
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts/2").then(
      ({ data }) =>
        (document.getElementById(
          "article"
        ).innerHTML = `<h3>Título del artículo: "${data.title}"</h3>
         <ul>
         <li><i>Autor: ${data.userId}</i></li>
         <li><i>Artículos: ${data.id}</i></li>
         <li><i>Descripción:</i> ${data.body}</li>
         </ul>`)
    ).catch("Error 404 page not found");
  }

  render() {
    return (
      <>
        <div id="article" className="articles-container"></div>
        <div>
        <img src={imgarticle} atl="loading" className="imgarticle" />
          <br />
          <Button title="Lerr artículo completo" />
        </div>
      </>
    );
  }
}

export { Article };
