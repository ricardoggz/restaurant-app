import React from "react";
import { Button } from "../button/Button";
import "./style/contact.css";

function Contact() {
  return (
    <section className="flex-container">
      <form className="form-container">
        <h2>¿Alguna duda, comentario o sugerencia? Envíanos un mensaje...</h2>
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
