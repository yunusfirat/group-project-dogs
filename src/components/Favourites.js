import React from "react";
import { useGlobalContext } from "./Context";
import "./Favourites.css";

const Favourites = (props) => {
  const { favouriteBreeds, savedPhotos } = useGlobalContext();
  const sortedBreeds = Object.entries(favouriteBreeds).sort((a, b) => b[1] - a[1]);
  const topFiveBreeds = sortedBreeds.slice(0, 5);
  return (
    <div className="Favourites">
      <div className="Favourites-breeds">
        <h2>Favourite Breeds</h2>
        {topFiveBreeds.map((dog) => {
          return (
            <p key={dog[0]}>{`${dog[0].replace("-", " ")} has ${dog[1]} vote${
              dog[1] > 1 ? "s" : ""
            }`}</p>
          );
        })}
      </div>
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
