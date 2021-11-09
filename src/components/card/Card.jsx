import React from "react";
import "./style/card.css";

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <figure>
          <img src={this.props.image} alt="loading" />
        </figure>
        <ul>
          <li>{this.props.name}</li>
          <li>{this.props.ingredients}</li>
          <li>{this.props.price}</li>
        </ul>
      </div>
    );
  }
}

export { Card };
