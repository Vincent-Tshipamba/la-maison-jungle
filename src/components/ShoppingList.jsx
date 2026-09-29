import { plantList } from "../data/plantList"
import "../styles/ShoppingList.css"

const ShoppingList = () => {
    const categoriesPlants = plantList.reduce(
        (acc, plant) => acc.includes(plant.category) ? acc : acc.concat(plant.category), []
    )

    return (
        <>
            <ul className="categories">
                {categoriesPlants.map((category, index) => (
                    <li key={`${category} - ${index}`}>{category}</li>
                ))}
            </ul>
            <ul className="plants">
                {plantList.map(plant => (
                    <li className="plant-item" key={`${plant.id}`}>{plant.name} {plant.isSpecialOffer && <span className="lmj-sale">Soldes🔥</span>}</li>
                ))}
            </ul>
        </>

    )
}

export default ShoppingList