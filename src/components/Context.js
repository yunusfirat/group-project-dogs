import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [randomDog, setRandomDog] = useState([]);
  const [savedPhotos, setSavedPhotos] = useState([]);
  const [favouriteBreeds, setFavouriteBreeds] = useState({});
  const url = "https://dog.ceo/api/breeds/image/random";

  const FetchRandomDog = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setRandomDog(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    FetchRandomDog();
  }, []);

  const nextImage = () => {
    FetchRandomDog();
  };

  const saveImage = () => {
    if (savedPhotos.includes(randomDog)) {
      alert("you have already added this dog.");
    } else {
      setSavedPhotos((savedPhotos) => savedPhotos.concat(randomDog));
    }
  };

  const addVoteToBreed = (breed) => {
    const newBreedVote = {};
    newBreedVote[breed] = breed in favouriteBreeds ? favouriteBreeds[breed] + 1 : 1;
    setFavouriteBreeds({
      ...favouriteBreeds,
      ...newBreedVote
    });
  };

  return (
    <AppContext.Provider
      value={{ randomDog, nextImage, saveImage, savedPhotos, favouriteBreeds, addVoteToBreed }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
