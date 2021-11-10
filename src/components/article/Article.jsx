import React from "react";
import axios from "axios";

axios.get("https://jsonplaceholder.typicode.com/posts/1").then(
  ({ data }) =>
    (document.getElementById("article").innerHTML = 
    `<h3>Título del artículo: "${data.title}"</h3>
        <p>${data.body}</p>`)
);

function Article() {
  return <div id="article"></div>;
}

export { Article };
