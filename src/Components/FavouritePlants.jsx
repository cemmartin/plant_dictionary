const FavouritePlants = ({ plants, onPlantSelected }) => {
  const FavouritePlants = plants.filter((plant) => plant.isFavourite);

  return (
    <>
      <h3>Favourite Plants:</h3>
      <ul>
        {FavouritePlants.map((plant) => {
          return (
            <li key={plant.index}>
              <button onClick={() => onPlantSelected(plant.index)}>
                {plant["common_name"]}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default FavouritePlants;
