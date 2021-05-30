import React from "react";
import "./Favourites.css";

class Favourites extends React.Component {
  render() {
    let topFiveDogs = props.dogs.sort(function(a, b) {
      return a.votes - b.votes;
  }).slice(-2);

    return (
      <div className="Favourites">
        <div className="Favourites-breeds">
          <h2>Favourite Breeds</h2>
          {/* the below assumes an array of dogs will be passed in as props */}
          {topFiveDogs.forEach((dog, index) => (
            <p key={index}>{dog.name}</p>
          ))}  
        </div>
        <div className="Favourites-saved">
          <h2>Saved Photos</h2>
          <div className="Favourites-photos">
            <img src="http://via.placeholder.com/80x80" />
            <img src="http://via.placeholder.com/80x80" />
          </div>
        </div>
      </div>
    );
  }
}

export default Favourites;