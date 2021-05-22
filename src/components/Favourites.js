import React from "react";
import { useGlobalContext } from "./Context";
import "./Favourites.css";

const Favourites = () => {
  const { savedPhotos } = useGlobalContext();
  console.log(savedPhotos);
  return (
    <div className="Favourites">
      <div className="Favourites-breeds">
        <h2>Favourite Breeds</h2>
        <p>???</p>
        <p>???</p>
      </div>
      <div className="Favourites-saved">
        <h2>Saved Photos</h2>
        <div className="Favourites-photos">
          {savedPhotos.map((photo) => {
            const { message } = photo;
            return <img src={message ? message : "http://via.placeholder.com/300x300"} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Favourites;
