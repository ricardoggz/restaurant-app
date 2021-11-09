import React from "react";
import { Button } from "../button/Button";
import "./style/contact.css";

function Contact() {
  return (
    <section className="flex-container sections-container">
      <form className="form-container">
        <span>¿Alguna duda, comentario o sugerencia? Envíanos un mensaje...</span>
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
