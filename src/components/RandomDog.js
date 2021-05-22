import React from "react";
import { useGlobalContext } from "./Context";
import "./RandomDog.css";

const RandomDog = () => {
  const { randomDog, nextImage, saveImage } = useGlobalContext();

  return (
    <div className="RandomDog">
      <h2 className="RandomDog-title">Random Dogs</h2>
      <img className="RandomDog-image" src={randomDog.message} />
      <p>
        <button className="RandomDog-button" onClick={saveImage}>
          Save Image
        </button>
        <button className="RandomDog-button" onClick={nextImage}>
          Next Dog
        </button>
      </p>
    </div>
  );
};

export default RandomDog;
