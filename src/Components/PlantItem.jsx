import React from "react";
import PlantList from "./PlantList";

const PlantItem = ({plant}) => {
    return (
        <>
            <p>{plant["common_name"]}</p>
            <p>Scientific Name: {plant["scientific_name"]}</p>
        </>
    )
}


export default PlantItem;