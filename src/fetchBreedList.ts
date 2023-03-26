import { QueryFunction } from "@tanstack/react-query";
import { Animal, BreedListApiResponse } from "./APIResponsesTypes";

const fetchBreedList: QueryFunction<
    BreedListApiResponse,
    ["breeds", Animal]
> = async ({ queryKey }) => {
    const [path, animal] = queryKey;
    if (!animal) return [];

    const response = await fetch(
        `http://pets-v2.dev-apis.com/${path}?animal=${animal}`
    );

    if (!response.ok) {
        throw new Error(`breeds ${animal} fetch not ok`);
    }

    return response.json();
};

export default fetchBreedList;
