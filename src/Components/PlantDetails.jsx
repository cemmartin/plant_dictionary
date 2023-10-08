import FavouritePlants from "./FavouritePlants";

const PlantDetails = ({ plant, onFavouriteSelect }) => {
  if (!plant) {
    return null;
  }

  const handleClick = () => {
    onFavouriteSelect(plant.index);
  };

  const favouriteBtnText = plant.isFavourite
    ? "Remove from favourites"
    : "Add to favourites";

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
      <p>Sunlight: {plant["sunlight"]}</p>
      <button onClick={handleClick}>{favouriteBtnText}</button>
      {/* added */}
    </>
  );
};

export default PlantDetails;
