import React from "react";
import "./style/button.css";

function Button(props) {
  return <button className="button__submit">{props.title}</button>;
}

export { Button };
