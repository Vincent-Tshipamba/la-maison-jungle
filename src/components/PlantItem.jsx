import CareScale from "./CareScale"
import "../styles/PlantItem.css"

const handleClick = (e) => {
    console.log('Clicked event : ', e)
}

const PlantItem = ({ name, price, cover, id, light, water, isBestSale }) => {

    return (
        <li className="lmj-plant-item" key={`${id}`} onClick={() => handleClick(name)}>
            {isBestSale && <span className="lmj-sale">🔥</span>}
            <img src={cover} alt={`${name} cover`} className="plant-item-cover" />
            {name}
            <span className="lmj-plant-item-price">{price}$</span>
            <CareScale careType='water' scaleValue={water} />
            <CareScale careType='light' scaleValue={light} />
        </li>
    )
}

export default PlantItem