import React from "react";

const Travel = props => (
  <section>
    <h1>#Country: {props.country}#</h1>
    <h3>
      <i>Destination: {props.destination}</i>
    </h3>
    <img src={props.photo} alt={props.destination} />
    <p>Distance from London: {props.distance}</p>
  </section>
);

export default Travel;
