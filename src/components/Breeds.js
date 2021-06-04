import React, { useState, useEffect } from "react";
import "./Breeds.css";

const Breeds = () => {
  const [breedsName, setBreedsName] = useState([]);
  const [selectedPhotoUrl, setSelectedPhotoUrl] = useState(undefined);
  const [selectedBreed, setSelectedBreed] = useState(undefined);

  useEffect(() => {
    getAllBreedsName();
  }, []);

  useEffect(() => {
    fetchRandomPhoto(selectedBreed);
  }, [selectedBreed]);

  async function getAllBreedsName() {
    const url = "https://dog.ceo/api/breeds/list/all";
    await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        let nameArray = [];
        for (const [key, value] of Object.entries(data.message)) {
          nameArray.push(`${key}`);
          value.forEach((breed) => nameArray.push(`${key}/${breed}`));
        }
        setBreedsName(nameArray);
        setSelectedBreed(nameArray[0]);
      })
      .catch((err) => alert(err));
  }

  async function fetchRandomPhoto(breed) {
    await fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then((res) => res.json())
      .then((data) => setSelectedPhotoUrl(data.message))
      .catch((err) => alert(err));
  }

  function handleSelect(e) {
    setSelectedBreed(e.target.value);
  }

  function handleClick() {
    const randomBreed = breedsName[Math.floor(Math.random() * breedsName.length)];
    setSelectedBreed(randomBreed);
  }

  return (
    <div className="Breeds">
      <h2 className="Breeds-title">Select a Breed</h2>
      <p>
        <select className="Breeds-select" value={selectedBreed} onChange={handleSelect}>
          {breedsName.map((breedName, index) => (
            <option key={index} value={breedName}>
              {breedName}
            </option>
          ))}
        </select>
      </p>
      <img
        className="Breeds-image"
        src={selectedBreed ? selectedPhotoUrl : "http://via.placeholder.com/300x300"}
        alt={selectedBreed ? selectedBreed : "empty"}
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
