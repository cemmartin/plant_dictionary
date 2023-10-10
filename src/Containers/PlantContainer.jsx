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
    fetch("https://perenual.com/api/species-list?key=sk-yU4T6523bcdce08c42382")
    //old key: sk-9LOQ6522a4ef3416f2382")
      .then((res) => res.json()) //res= response
      .then((plants) => {
        setPlants(plants.data);
      })
      .catch((error) => console.log(`error: loading data; ${error}`));
  };

  useEffect(() => { //need to check EXACTLY what this does!
    getPlants();
    // console.log("use effect working") - workinh
  }, []);


  function handlePlantSelected(index) { //sets selected plant- does this mean sets out the info about how it can/will be used?
    setSelectedPlant(plants[index]); //might be plants?
  }

  // handles
  const handleFavPlants = (id) => {
    const updatedPlants = plants.map((plant) => {
      return plant.id === id
        ? { ...plant, isFavourite: !plant.isFavourite }
        : plant;
    });
    setPlants(updatedPlants);
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
