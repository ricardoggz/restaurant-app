import React from "react";
import "./style/footer.css";

function Footer() {
  return (
    <footer>
      <section className="flex-container sections-container">
        <span>Medios de contacto:</span>
        <ul>
          <li>Teléfono : +52 1 (55) 12 34 56 78</li>
          <li>Correo: correo@correo.com.mx</li>
          <li>Dirección: Av. Lorem ipsum dolor sit amet. Col. Lorem, ipsum.</li>
          <li>Contacto del creador: @ricardo_guevarag</li>
        </ul>
      </section>
      <div className="copyright">
        <span>&copy; Todos los derechos reservados | 2021</span>
      </div>
    </footer>
  );
}

export { Footer };
