import React from "react";
import PlantList from "./PlantList";
import PlantDetails from "./PlantDetails";
import FavPlants from "./FavouritePlants";

const PlantItem = ({ plant, index }) => {


    return (
        <>
            <option id={index} value={index} name="plant-id">
                {plant["common_name"]}
            </option>
            {/* <button onClick={(handleClick)}{favBtnText}></button> */}
            {/* <button onClick={(handleClick)}{favBtnText}></button> */}
        </>
    );
};

export default PlantItem;
