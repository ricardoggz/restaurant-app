import React, {useEffect} from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../../firebase/firebaseConfig";

function Reservation() {

useEffect(()=>{
    const getUsers =async ()=>{
        const showUsers = await getDocs(collection(db, 'users'));
        console.log(showUsers.docs[0].data());
    }
    getUsers();
    
}, [])
  return (
      <section className="flex-container sections-container">
          <p>Hola</p>
      </section>
  )
}

export { Reservation };
