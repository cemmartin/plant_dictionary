import React, { useState, useEffect } from "react";
import PlantList from "../Components/PlantList";
import PlantItem from "../Components/PlantItem";
import PlantDetails from "../Components/PlantDetails";
import FavouritePlants from "../Components/FavouritePlants";
import "./PlantContainer.css";

const PlantContainer = () => {
  const [plants, setPlants] = useState([]);
  const [selectedPlant, setSelectedPlant] = useState(null);

  const getPlants = function () { //fetches the API
    fetch("https://perenual.com/api/species-list?key=".concat(import.meta.env.VITE_API_KEY))
      .then((res) => res.json()) //res= response
      .then((plants) => {
        setPlants(plants.data);
      })
      .catch((error) => console.log(`error: loading data; ${error}`));
  };

  useEffect(() => { //when we want to synchronise the app to something external (make sure everythign syncs up)
    getPlants();
  }, []);


  function handlePlantSelected(index) { //sets selected plant- does this mean sets out the info about how it can/will be used?
    setSelectedPlant(plants[index]); //might be plants?
  }

  // handles
  const handleFavPlants = (id) => {
    const updatedPlants = plants.map((plant) => { //creates an array of the plants
      return plant.id === id //if the id matches...
        ? { ...plant, isFavourite: !plant.isFavourite } //then add it to the new array; if it's falsey & selected, add it to Favourites (basically do the opposite of what is selected)
        : plant; //if it's not true just return the plant
    });
    setPlants(updatedPlants); //sets plants to updated plants
  };

  return (
    <>
      <p>Select a plant:</p>
      {plants ? (
        <PlantList plants={plants} onPlantSelected={handlePlantSelected} />
      ) : null}

      {selectedPlant ? (
        <PlantDetails
          plant={selectedPlant}
          onFavouriteSelect={handleFavPlants}
        />
      ) : null}

      <br></br>

      <FavouritePlants plants={plants} onPlantSelected={handleFavPlants} />
        {/* should the second half be handlePlantSelected */}
    </>
  );
};

export default PlantContainer;
