// const categoriesPlants = plantList.reduce(
//     (acc, plant) => acc.includes(plant.category) ? acc : acc.concat(plant.category), []
// )

import { plantList } from "../data/plantList"
import "../styles/Categories.css"
// const categoriesPlants = [...new Set(plantList.map(plant => plant.category))]


const Categories = ({ setCategory }) => {
    const categoriesPlants = plantList.map(plant => plant.category).filter((category, index, array) => {
        return array.indexOf(category) === index
    })

    return (
        <div className="lmj-categories">
            <select className="lmj-categories-select" onChange={(e) => setCategory(e.target.value)}>
                <option value="">Selectionnez une categorie</option>
                {categoriesPlants.map((category, index) => (
                    <option key={`${index} - ${category}`}>{category}</option>
                ))}
            </select>
            <button onClick={() => setCategory('')}>Reinitialiser</button>
        </div>
    )
}

export default Categories