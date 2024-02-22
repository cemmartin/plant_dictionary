import { useState } from "react";
import FavouritePlants from "./FavouritePlants";

const PlantDetails = ({ plant, onFavouriteSelect }) => {
  if (!plant) {
    return null;
  }

  const [favourite, setFavourite] = useState(plant.isFavourite)

  const handleClick = () => {
    onFavouriteSelect(plant.id);
    setFavourite(!favourite) //has no index --> passing undef
  }; 

  const favouriteBtnText = favourite
    ? "Remove from favourites"
    : "Add to favourites";
    // you won't see the change bc dependent on plant (above) which is out of scope

  return (
    <>
      <h2>{plant["common_name"]}</h2>
      <img
        src={plant["default_image"]["small_url"]}
        alt={`Photo of ${plant["common_name"]}`}
      ></img>
      {/* <a href={plant["default_image"]["regular_url"]}></a> */}
      <p>Scientific Name: {plant["scientific_name"]}</p>
      <p>Watering: {plant["watering"]}</p>
      <p>Sunlight: {plant["sunlight"].join(", ")}</p>
      <button onClick={handleClick}>{favouriteBtnText}</button>
      {/* added */}
    </>
  );
};

export default PlantDetails;
