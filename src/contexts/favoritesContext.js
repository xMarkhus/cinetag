import { createContext, useContext, useState } from "react";

export const FavoritesContext = createContext();
FavoritesContext.displayName = "Favoritos";

const FavoritesProvider = ({ children }) => {
    const [favorite, setFavorite] = useState([]);

    return (
        <FavoritesContext.Provider
            value={{ favorite, setFavorite }}
        >
            {children}
        </FavoritesContext.Provider>
    )
};

export function useFavoriteContext() {
    const { favorite, setFavorite } = useContext(FavoritesContext);

    function addFavorite(newFavorite) {
        setFavorite((prevFavorites) => {
            const isAlreadyFavorite = prevFavorites.some(
                (item) => item.id === newFavorite.id
            );

            if (isAlreadyFavorite) {
                return prevFavorites.filter((item) => item.id !== newFavorite.id);
            }

            return [...prevFavorites, newFavorite];
        });
    }


    return {
        favorite,
        addFavorite,
    };
};

export default FavoritesProvider;
