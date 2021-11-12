import React from "react";
import { Button } from "../button/Button";
import "./style/contact.css";
import illustration from "./img/illustration.png";

function Contact() {
  return (
    <section className="flex-container contact-container">
      <img src={illustration} alt="loading" />
      <form className="form-container">
        <center>
          <span>
            <b>¿Alguna duda, comentario o sugerencia? Contáctanos..</b>
          </span>
        </center>
        <label>Tu nombre:</label>
        <input type="text" placeholder="nombre:" />
        <label>Tu correo:</label>
        <input type="email" placeholder="correo:" />
        <label>Tu mensaje:</label>
        <textarea placeholder="Escribe tu mensaje:" />
        <Button title="Enviar mensaje" />
      </form>
    </section>
  );
}

export { Contact };
