import { plantList } from "../data/plantList"
import CareScale from "./CareScale"
import "../styles/ShoppingList.css"
import PlantItem from "./PlantItem"
import { useState } from "react"

const ShoppingList = ({ category, cart, updateCart }) => {
    const addToCart = ({ name, price }) => {
        const currentSavedPlant = cart.find((plant) => plant.name === name)

        if (currentSavedPlant) {
            const filteredCurrentPlans = cart.filter(
                (plant) => plant.name !== name
            )

            updateCart([
                ...filteredCurrentPlans,
                { name, price, amount: currentSavedPlant.amount + 1 }
            ])
        } else {
            return updateCart([...cart, { name, price, amount: 1 }])
        }
    }
    return (
        <>
            <ul className="lmj-plant-list">
                {plantList.filter(plant => (!category || plant.category == category))
                    .map(plant => (
                        <div className="">
                            <PlantItem key={plant.id} id={plant.id} price={plant.price} name={plant.name} cover={plant.cover} light={plant.light} water={plant.water} isBestSale={plant.isBestSale} />
                            <button className="lmj-cart-add-button" onClick={() => addToCart({ name: plant.name, price: plant.price })}>Ajouter au panier</button>
                        </div>
                    ))}
            </ul>
        </>

    )
}

export default ShoppingList