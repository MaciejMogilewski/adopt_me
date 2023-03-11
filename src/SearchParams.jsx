import { useState } from "react";
import useBreedList from "./useBreedList";
import Results from "./Results";
import { useQuery } from "@tanstack/react-query";
import fetchSearch from "./fetchSearch";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
    const [location, setLocation] = useState("");
    const [animal, setAnimal] = useState("");
    const [breed, setBreed] = useState("");
    const [breeds] = useBreedList(animal);
    const results = useQuery(
        ["search", { animal, breed, location }],
        fetchSearch
    );

    const pets = results?.data?.pets ?? [];

    return (
        <div className="search-params">
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    // requestPets();
                }}
            >
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

            <Results pets={pets} />
        </div>
    );
};

export default SearchParams;
