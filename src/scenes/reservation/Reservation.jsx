import React, { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../../firebase/firebaseConfig";
import "./style/reservation.css";
import illustration from "./img/illustration-reservation.png";

function Reservation() {
  useEffect(() => {
    const getUsers = async () => {
      const showUsers = await getDocs(collection(db, "users"));
      console.log(showUsers.docs[0].data());
    };
    getUsers();
  }, []);
  return (
    <section className="flex-container sections-container">
      <h1>Reserva ahora mismo</h1>
      <div className="reservation-container">
        <img src={illustration} alt="loading" />
        <form className="reservation-form">
          <label>Tu nombre:</label>
          <input type="text" placeholder="Ingresa tu nombre" required />
          <label>Fecha de reservación:</label>
          <input type="date" required />
          <label>Número estimado de personas:</label>
          <input type="number" required />
        </form>
      </div>
    </section>
  );
}

export { Reservation };
