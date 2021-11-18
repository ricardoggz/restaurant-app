import React, { useEffect, useState } from "react";

/*firebase*/
import { collection, getDocs } from "firebase/firestore";
import db from "../../firebase/firebaseConfig";

/*img & styles*/
import "./style/reservation.css";
import illustration from "./img/illustration-reservation.png";

/*components*/
import { Button } from "../../components/button/Button";

function Reservation() {
  {
    /*useEffect(() => {
    const getUsers = async () => {
      const showUsers = await getDocs(collection(db, "users"));
      console.log(showUsers.docs[0].data().name);
      console.log(showUsers.docs[0].data().lastname)
    };
    getUsers();
  }, []);*/
  }

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

  const saveData = (e) => {
    e.preventDefault();
    console.log(values);
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
        </form>
      </div>
    </section>
  );
}

export { Reservation };
