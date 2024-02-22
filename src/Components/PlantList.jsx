import React from "react";
import PlantContainer from "../Containers/PlantContainer";
import PlantItem from "./PlantItem";

const PlantList = ({ plants, onPlantSelected }) => { //going to call onPlantSelected when we handlePlantSelect (see below)
    const PlantDropdown = plants.map((plant, index) => { //declares the plant dropdown, says it takes an input of plant & index (?)
    return <PlantItem plant={plant} index={index} key={index} />; 
    });

    const handlePlantSelect = (evt) => {
    onPlantSelected(evt.target.value);
    };


    return (
        <>
            <select id="plantList" name="plantList" onChange={handlePlantSelect}>
            {PlantDropdown}
            </select>
        </>
    );
};

export default PlantList;
