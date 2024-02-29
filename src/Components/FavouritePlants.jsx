const FavouritePlants = ({ plants, onPlantSelected }) => {
  const FavouritePlants = plants.filter((plant) => plant.isFavourite);

  return (
    <>
      <h3>Favourite Plants:</h3>
      <ul>
        {FavouritePlants.map((plant) => {
          return (
            <ul key={plant.index}>
              <button onClick={() => onPlantSelected(plant.index)} class="favourited-plant">
                {plant["common_name"]}
              </button>
            </ul>
          );
        })}
      </ul>
    </>
  );
};

export default FavouritePlants;
