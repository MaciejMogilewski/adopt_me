import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Details from "./Details";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
            cacheTime: Infinity,
        },
    },
});

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <QueryClientProvider client={queryClient}>
                    <header>
                        <Link to="/">Adopt Me!</Link>
                    </header>
                    <Routes>
                        <Route path="/" element={<SearchParams />} />
                        <Route path="/details/:id/" element={<Details />} />
                    </Routes>
                </QueryClientProvider>
            </BrowserRouter>
        </div>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
