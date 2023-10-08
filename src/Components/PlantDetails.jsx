const PlantDetails = ({plant}) => {

   return (
    <>
        <h2>{plant["common_name"]}</h2>
        <a href={plant["default_image"]["regular_url"]}></a>
        <p>Scientific Name: {plant["scientific_name"]}</p>
        <p>Watering: {plant["watering"]}</p>
        <p>Sunlight: {plant["sunlight"]}</p>
    </>
   )
}

export default PlantDetails