import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [randomDog, setRandomDog] = useState([]);
  const [savedPhotos, setSavedPhotos] = useState([]);
  console.log(savedPhotos);
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

  return (
    <AppContext.Provider value={{ randomDog, nextImage, saveImage, savedPhotos }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
