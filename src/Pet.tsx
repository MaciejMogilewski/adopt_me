import { Link } from "react-router-dom";

interface IProps {
    name: string;
    id: number;
    breed: string;
    animal: string;
    location: string;
    images: string[];
}

const Pet = ({ name, id, breed, animal, location, images }: IProps) => {
    const hero =
        images && images.length
            ? images[0]
            : "http://pets-images.dev-apis.com/pets/none.jpg";

    return (
        <Link className="relative block pet" to={`/details/${id}`}>
            <div className="image-container">
                <img src={hero} alt={name} data-testid="thumbnail" />
            </div>
            <div className="absolute bottom-0 left-0 bg-gradient-to-tr from-white to-transparent pr-2 pt-2 info">
                <h1>{name}</h1>
                <h2>
                    {animal} - {breed} - {location}
                </h2>
            </div>
        </Link>
    );
};

export default Pet;
