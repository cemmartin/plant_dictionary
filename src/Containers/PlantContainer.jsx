import React, {useState, useEffect} from "react"
import PlantList from "../Components/PlantList"

const PlantContainer = () => {
    const [myPlants, setPlants] = useState([])

    useEffect(() => {
        getPlants();
        // console.log("use effect working") - workinh
    }, []);

    const getPlants = function () {
        fetch ("https://perenual.com/api/species-list?key=sk-9LOQ6522a4ef3416f2382")
        .then((res) => res.json())
        .then((plants) => {setPlants(plants.data)})
        .catch((error) => console.log(`error: loading data; ${error}`))
    }

    return (
        <>
            <h2>testing Plant Container</h2>
            <PlantList plants={myPlants}/>
        </>

    )
}

export default PlantContainer