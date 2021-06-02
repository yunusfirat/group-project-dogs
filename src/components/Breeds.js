import React, { useState, useEffect } from "react";
import "./Breeds.css";

const Breeds = () => {
  const options = [
    "beagle",
    "bluetick",
    "bullterrier/staffordshire",
    "malinois",
    "wolfhound/irish"
  ];

  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [selectedBreed, setSelectedBreed] = useState(options[0]);

  useEffect(() => {
    fetchRandomPhoto(selectedBreed);
  }, [selectedBreed]);

  function fetchRandomPhoto(breed) {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then((res) => res.json())
      .then((data) => setSelectedPhoto(data.message))
      .catch((err) => alert(err));
  }

  function handleSelect(e) {
    setSelectedBreed(e.target.value);
  }

  function handleClick() {
    const randomBreed = options[Math.floor(Math.random() * options.length)];
    setSelectedBreed(randomBreed);
  }

  return (
    <div className="Breeds">
      <h2 className="Breeds-title">Select a Breed</h2>
      <p>
        <select className="Breeds-select" value={selectedBreed} onChange={handleSelect}>
          {options.map((breedName, index) => (
            <option key={index} value={breedName}>
              {breedName}
            </option>
          ))}
        </select>
      </p>
      <img
        className="Breeds-image"
        src={selectedPhoto ? selectedPhoto : "http://via.placeholder.com/300x300"}
        alt={selectedPhoto ? selectedPhoto.slice(30, 6) : "empty"}
      />
      <p>
        <button className="Breeds-button" onClick={handleClick}>
          Show me more!
        </button>
      </p>
    </div>
  );
};

export default Breeds;
