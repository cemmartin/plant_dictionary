const FavouritePlants = ({ plants, onPlantSelected }) => {
  const FavouritePlants = plants.filter((plant) => plant.isFavourite);

  return (
    <>
      <h3>Favourite Plants:</h3>
        {FavouritePlants.map((plant) => {
          return (
            <div key={plant.index} class="fav-plant-container">
              <button onClick={() => onPlantSelected(plant.index)} class="favourited-plant">
                {plant["common_name"]}
              </button>
            </div>
          );
        })}
    </>
  );
};

export default FavouritePlants;
