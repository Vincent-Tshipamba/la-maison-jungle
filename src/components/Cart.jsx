import "../styles/Cart.css"

const Cart = () => {
    const title = "Mon panier";
    let total = 0;

    const plants = [
        {
            name: "Monstera",
            price: 8,
        },
        {
            name: "Lierre",
            price: 10,
        },
        {
            name: "Bouquet de fleurs",
            price: 15,
        },
    ];

    plants.forEach(plant => {
        total += plant.price
    });

    return (
        <div className="cart">
            <p>{title}</p>

            <ul>
                {plants.map((plant) => (
                    <li>
                        {plant.name} - {plant.price}€
                    </li>
                ))}
            </ul>

            <p>Total du panier : {total}€</p>
        </div>
    );
};

export default Cart;