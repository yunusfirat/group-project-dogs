import React, { useState, useEffect } from "react";
import Dog from "./Dog.js";
import "./DogBattle.css";

const DogBattle = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch(`https://dog.ceo/api/breeds/image/random/2`)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          const values = Object.values(data.message);
          setImages(values);
        }
      });
  }, []);
  return (
    <div className="DogBattle">
      <h2 className="DogBattle-title">Choose the best dog</h2>
      <div className="DogBattle-images">
        <Dog image={images[0]} />
        <Dog image={images[1]} />
      </div>
    </div>
  );
};

export default DogBattle;
