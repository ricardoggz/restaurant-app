import React from "react";

function ButtonDanger(props) {
  return <button className="button__danger button__sumbit" type="reset">{props.title}</button>;
}

export {ButtonDanger};
