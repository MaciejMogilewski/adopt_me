import { Link } from "react-router-dom";

const Pet = ({ name, id, breed, animal, location, images }) => {
    let hero = images.length
        ? images[0]
        : "http://pets-images.dev-apis.com/pets/none.jpg";

    return (
        <Link className="relative block" to={`/details/${id}`}>
            <div>
                <img src={hero} alt={name} />
            </div>
            <div className="absolute bottom-0 left-0 bg-gradient-to-tr from-white to-transparent pr-2 pt-2">
                <h1>{name}</h1>
                <h2>
                    {animal} - {breed} - {location}
                </h2>
            </div>
        </Link>
    );
};

export default Pet;
