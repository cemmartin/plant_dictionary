import React, { useState, useEffect } from "react";
import PlantList from "../Components/PlantList";
import PlantItem from "../Components/PlantItem";
import PlantDetails from "../Components/PlantDetails";
import FavouritePlants from "../Components/FavouritePlants";
import "./PlantContainer.css";

const PlantContainer = () => {
  const [plants, setPlants] = useState([]);
  const [selectedPlant, setSelectedPlant] = useState(null);

  const getPlants = function () {
    fetch("https://perenual.com/api/species-list?key=sk-9LOQ6522a4ef3416f2382")
      .then((res) => res.json())
      .then((plants) => {
        setPlants(plants.data);
      })
      .catch((error) => console.log(`error: loading data; ${error}`));
  };

  const onPlantSelected = (index) => {
    setSelectedPlant(plants[index]); //might be plants?
  };

  useEffect(() => {
    getPlants();
    // console.log("use effect working") - workinh
  }, []);

  //
  const handleFavPlants = (index) => {
    const updatedPlants = plants.map((plant) => {
      return plant.index === index
        ? { ...plant, isFavourite: !plant.isFavourite }
        : plant;
    });
    setPlants(updatedPlants);
  };

  return (
    <>
      <p>Select a plant:</p>
      {plants ? (
        <PlantList plants={plants} onPlantSelected={onPlantSelected} />
      ) : null}

      {selectedPlant ? (
        <PlantDetails
          plant={selectedPlant}
          onFavouriteSelect={handleFavPlants}
        />
      ) : null}

      <br></br>

      <FavouritePlants plants={plants} onPlantSelected={handleFavPlants} />
    </>
  );
};

export default PlantContainer;
