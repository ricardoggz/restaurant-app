import React, { useState } from "react";

/*firebase*/
import { collection, addDoc } from "firebase/firestore";
import db from "../../firebase/firebaseConfig";

/*img & styles*/
import "./style/reservation.css";
import illustration from "./img/illustration-reservation.png";
import Swal from "sweetalert2";

/*components*/
import { Button } from "../../components/button/Button";
import { ButtonDanger } from "../../components/button/ButtonDanger";

function Reservation() {
  /*Validar datos del formulario y mandarlos a firebase*/

  const valueForm = {
    name: "",
    firstDate: "",
    secondDate: "",
    numberpeople: "",
  };

  const [values, setValues] = useState(valueForm);

  const valueData = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const saveData = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "reservations"), { values });
    console.log(values);
    Swal.fire(
      "Reservación exitosa " +
        `${values.name}` +
        " te esperamos el día " +
        `${values.secondDate}`
    );
  };

  return (
    <section className="flex-container sections-container">
      <h1>Reserva ahora mismo</h1>
      <div className="reservation-container">
        <img src={illustration} alt="loading" />
        <form className="reservation-form" onSubmit={saveData}>
          <label>Tu nombre:</label>
          <input
            type="text"
            name="name"
            placeholder="Ingresa tu nombre"
            onChange={valueData}
            required
          />
          <label>Fecha de registro:</label>
          <input type="date" name="firstDate" onChange={valueData} required />
          <label>Fecha estimada:</label>
          <input type="date" name="secondDate" onChange={valueData} required />
          <label>Número de personas:</label>
          <input
            type="number"
            name="numberpeople"
            onChange={valueData}
            required
          />
          <Button title="Reservar" />
          <ButtonDanger title="Cancelar" />
        </form>
      </div>
    </section>
  );
}

export { Reservation };
