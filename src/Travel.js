/*import React from "react";

//Functional component does not allow to create functions inside it
const Travel = props => (
  <section>
    <h1>#Country: {props.country}#</h1>
    <h3>
      <i>Destination: {props.destination}</i>
    </h3>
    <img src={props.photo} alt={props.destination} />
    <p>Distance from London: {props.distance}</p>
  </section>
);*/

//This Travel sub-component will display the data retrieved from the Travels sub-component with the structure of HTML inside return function
//Class component does allow to create functions and other JS syntaxes to be linked with; make sure to always use the this keyword before props
import React, { Component } from "react";

class Travel extends Component {
  render() {
    //print out the trips array //console.log(this.props.data);

    //var {object keys are passed as values for the data retrieved} = the variable name that stores the values in the iteration
    var { country, destination, photo, distance } = this.props.data;

    //Object destructuring
    return (
      <section>
        <h1>#Country: {country}#</h1>
        <h3>
          <i>Destination: {destination}</i>
        </h3>
        <img src={photo} alt={destination} />
        <p>Distance from London: {distance}</p>
      </section>
    );
  }
}

export default Travel;
