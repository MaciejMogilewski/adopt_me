import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "./fetchPet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import { lazy, useContext, useState } from "react";
import AdoptPetContext from "./AdoptPetContext";

const Modal = lazy(() => import("./Modal"));

const Details = () => {
    const { id } = useParams();
    const results = useQuery(["details", id], fetchPet);
    const [showModal, setShowModal] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [_, setAdoptedPet] = useContext(AdoptPetContext);
    const navigate = useNavigate();
    const [activeImage, setActiveImage] = useState(0);

    if (results.isLoading) {
        return (
            <div className="loading-pane">
                <h2 className="loader">🌀</h2>
            </div>
        );
    }

    const pet = results.data.pets[0];

    return (
        <div className="details">
            <Carousel
                activeImage={activeImage}
                setActiveImage={setActiveImage}
                images={pet.images}
            />
            <div>
                <h1>{pet.name}</h1>
                <h2>{`${pet.animal} — ${pet.breed} — ${pet.city}, ${pet.state}`}</h2>
                <button
                    onClick={() => {
                        setShowModal(true);
                    }}
                >
                    Adopt {pet.name}
                </button>
                <p>{pet.description}</p>
                {showModal && (
                    <Modal>
                        <div>
                            <h1>Would you like adopt {pet.name}?</h1>
                            <div className="buttons">
                                <button
                                    onClick={() => {
                                        setAdoptedPet({ ...pet, activeImage });
                                        navigate("/");
                                    }}
                                >
                                    Yes
                                </button>
                                <button
                                    onClick={() => {
                                        setShowModal(false);
                                    }}
                                >
                                    No
                                </button>
                            </div>
                        </div>
                    </Modal>
                )}
            </div>
        </div>
    );
};

function DetailsErrorBoundary(props) {
    return (
        <ErrorBoundary>
            <Details {...props} />
        </ErrorBoundary>
    );
}

export default DetailsErrorBoundary;
