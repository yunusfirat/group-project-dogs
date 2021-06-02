import React from "react";
import { useGlobalContext } from "./Context";
import "./Favourites.css";

const Favourites = () => {
  const { savedPhotos } = useGlobalContext();
  //   let topFiveDogs = props.dogs.sort(function(a, b) {
  //     return a.votes - b.votes;
  // }).slice(-2);
  return (
    <div className="Favourites">
      {/* <div className="Favourites-breeds">
        <h2>Favourite Breeds</h2>
        {/* the below assumes an array of dogs will be passed in as props */}
      {/* {topFiveDogs.forEach((dog, index) => (
            <p key={index}>{dog.name}</p>
          ))}  
      </div> */}
      <div className="Favourites-saved">
        <h2>Saved Photos</h2>
        <div className="Favourites-photos">
          {savedPhotos.map((photo, index) => {
            const { message } = photo;
            return (
              <img
                key={index}
                src={message ? message : "http://via.placeholder.com/300x300"}
                alt={index + 1}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Favourites;
