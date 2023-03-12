import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Details from "./Details";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import AdoptPetContext from "./AdoptPetContext";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
            cacheTime: Infinity,
        },
    },
});

const App = () => {
    const adoptPet = useState(null);
    // const [dim, setDim] = useState("darkMode");

    return (
        <div>
            <BrowserRouter>
                <QueryClientProvider client={queryClient}>
                    <AdoptPetContext.Provider value={adoptPet}>
                        <header>
                            <Link to="/">Adopt Me!</Link>
                        </header>
                        <Routes>
                            <Route path="/" element={<SearchParams />} />
                            <Route path="/details/:id/" element={<Details />} />
                        </Routes>
                    </AdoptPetContext.Provider>
                </QueryClientProvider>
            </BrowserRouter>
        </div>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
