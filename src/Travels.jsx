import React, { Component } from "react";
import Travel from "./Travel";

const trips = [
  {
    country: "Germany",
    destination: "Berlin",
    photo:
      "https://images.unsplash.com/photo-1444838639505-f9042c5d2386?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    distance: "687.7 miles"
  },
  {
    country: "Netherlands",
    destination: "Amsterdam",
    photo:
      "https://images.unsplash.com/photo-1549701455-d0d42354b009?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    distance: "337.6 miles"
  },
  {
    country: "Finland",
    destination: "Helsinki",
    photo:
      "https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    distance: "1,683.7 miles"
  },
  {
    country: "France",
    destination: "Paris",
    photo:
      "https://images.unsplash.com/photo-1550340499-a6c60fc8287c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    distance: "292.0 miles"
  },
  {
    country: "Denmark",
    destination: "Copenhagen",
    photo:
      "https://images.unsplash.com/photo-1513622118278-bc041b3c13ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
    distance: "780.9 miles"
  }
];

//This Map method here will iterate trips array
//Key keyword is like an id that can be used in any element
//Sub-component Travel will be called when the iteration of the array is happening
class Travels extends Component {
  render() {
    return (
      <section>
        {trips.map(trip => (
          <Travel key={trip.country} data={trip} />
        ))}
      </section>
    );
  }
}

export default Travels;
