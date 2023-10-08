import React from "react";
import PlantList from "./PlantList";
import PlantDetails from "./PlantDetails";

const PlantItem = ({ plant, index }) => {
  return (
    <>
      <option id={index} value={index} name="plant-id">
        {plant["common_name"]}
      </option>
    </>
  );
};

export default PlantItem;
