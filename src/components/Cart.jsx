import "../styles/Cart.css"
import { useEffect, useState } from "react";

const Cart = ({ cat, cart, updateCart }) => {
    let [isOpen, setIsOpen] = useState(false)
    let total = cart.reduce((acc, item) => acc + item.amount * item.price, 0)

    return isOpen ? (
        <div className="lmj-cart">
            <button className="lmj-cart-toggle-button" onClick={() => setIsOpen(false)}>Fermer le panier</button>
            <h2>Panier : </h2>

            <div>
                {cart.map(({ name, price, amount }, index) => (
                    <li>{name} {price} $ x {amount}</li>
                ))}
            </div>

            <h3>Total : {total}$</h3>

            <button onClick={() => updateCart([])}>Reinitialiser le panier</button>
        </div>
    ) : (
        <div className='lmj-cart-closed'>
            <button
                className='lmj-cart-toggle-button'
                onClick={() => setIsOpen(true)}
            >
                Ouvrir le Panier
            </button>
        </div>
    )

}

// const Cart = () => {
//     const title = "Mon panier";
//     let total = 0;

//     const plants = [
//         {
//             name: "Monstera",
//             price: 8,
//         },
//         {
//             name: "Lierre",
//             price: 10,
//         },
//         {
//             name: "Bouquet de fleurs",
//             price: 15,
//         },
//     ];

//     plants.forEach(plant => {
//         total += plant.price
//     });

//     return (
//         <div className="cart">
//             <p>{title}</p>

//             <ul>
//                 {plants.map((plant, index) => (
//                     <li key={`${index} - ${plant.name}`}>
//                         {plant.name} - {plant.price}€
//                     </li>
//                 ))}
//             </ul>

//             <p>Total du panier : {total}€</p>
//         </div>
//     );
// };

export default Cart;