import { useEffect, useState } from "react";
import Pet from "./Pet";
import useBreedList from "./useBreedList";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
    const [location, setLocation] = useState("");
    const [animal, setAnimal] = useState("");
    const [breed, setBreed] = useState("");
    const [pets, setPets] = useState([]);
    const [breeds] = useBreedList(animal);

    useEffect(() => {
        requestPets();
    }, []);

    async function requestPets() {
        const response = await fetch(
            `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
        );
        const data = await response.json();
        setPets(data.pets);
    }

    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">Location</label>
                <input
                    type="text"
                    id="location"
                    placeholder="Location"
                    value={location}
                    onChange={(event) => setLocation(event.target.value)}
                />
                <label htmlFor="animal">Animal</label>
                <select
                    id="animal"
                    value={animal}
                    onChange={(event) => {
                        setAnimal(event.target.value);
                        setBreed("");
                    }}
                >
                    {ANIMALS.map((animal) => (
                        <option key={animal} value={animal}>
                            {animal}
                        </option>
                    ))}
                </select>

                <label htmlFor="breed">Breed</label>
                <select
                    id="breed"
                    value={breed}
                    onChange={(event) => setBreed(event.target.value)}
                    disabled={!breeds.length}
                >
                    {breeds.map((breed) => (
                        <option key={breed} value={breed}>
                            {breed}
                        </option>
                    ))}
                </select>
                <button>Submit</button>
            </form>

            {pets.map((pet) => (
                <Pet
                    key={pet.id}
                    name={pet.name}
                    animal={pet.animal}
                    breed={pet.breed}
                />
            ))}
        </div>
    );
};

export default SearchParams;
