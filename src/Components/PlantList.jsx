import React from "react";
import PlantContainer from "../Containers/PlantContainer";
import PlantItem from "./PlantItem";

const PlantList = ({plants}) => {
    const plantItems = plants.map((plant, index) => {
        return <PlantItem plant={plant} key={index}/>
    });

    return (
        <>
            <>{plantItems}</>
        </>
    );

};

export default PlantList;



