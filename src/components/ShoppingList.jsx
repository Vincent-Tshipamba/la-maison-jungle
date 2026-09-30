import { plantList } from "../data/plantList"
import CareScale from "./CareScale"
import "../styles/ShoppingList.css"
import PlantItem from "./PlantItem"

const ShoppingList = () => {
    // const categoriesPlants = plantList.reduce(
    //     (acc, plant) => acc.includes(plant.category) ? acc : acc.concat(plant.category), []
    // )

    // const categoriesPlants = [...new Set(plantList.map(plant => plant.category))]

    const categoriesPlants = plantList.map(plant => plant.category).filter((category, index, array) => {
        return array.indexOf(category) === index
    })
    return (
        <>
            <ul className="categories">
                {categoriesPlants.map((category, index) => (
                    <li key={`${category} - ${index}`}>{category}</li>
                ))}
            </ul>
            <ul className="plant-list">
                {plantList.map(plant => (
                    <PlantItem key={plant.id} id={plant.id} name={plant.name} cover={plant.cover} light={plant.light} water={plant.water} isBestSale={plant.isBestSale} />
                ))}
            </ul>
        </>

    )
}

export default ShoppingList