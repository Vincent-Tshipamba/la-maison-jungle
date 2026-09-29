import "../styles/Banner.css";
import logo from "../assets/logo.jpg"

const Header = () => {
    const title = "🌿 La maison jungle";
    const isSpecialDay = true;

    return (
        <div className="banner">
            <img src={logo} alt="Logo la maison Jungle" className="banner-logo" />
            <h1 className="banner-title">{title.toUpperCase()}</h1>
        </div>
    );
};

const Description = () => {
    const slug = "Ici achetez toutes les plantes dont vous avez toujours rêvé 🌱";

    return <p>{slug}</p>;
};

const Banner = () => {
    return (
        <>
            <Header />
            <Description />
        </>
    );
};

export default Banner