import { QueryFunction } from "@tanstack/react-query";
import { PetAPIResponse } from "./APIResponsesTypes";

const fetchSearch: QueryFunction<
    PetAPIResponse,
    [
        "search",
        {
            location: string;
            animal: string;
            breed: string;
        }
    ]
> = async ({ queryKey }) => {
    const { animal, breed, location } = queryKey[1];
    const response = await fetch(
        `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );

    if (!response.ok) {
        throw new Error(`pet search not OK ${animal} - ${breed} - ${location}`);
    }

    return response.json();
};

export default fetchSearch;
