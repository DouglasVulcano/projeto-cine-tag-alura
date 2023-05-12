import { createContext, useContext, useState } from "react";

export const FavoritesContext = createContext();

FavoritesContext.displayName = "FavoritesContext";

export default function FavoritesProvider({ children }) {
  const [favorite, setFavorite] = useState([]);

  return (
    <FavoritesContext.Provider value={{ favorite, setFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavoritesContext() {
  const { favorite, setFavorite } = useContext(FavoritesContext);

  function addFavorite(newFavorite) {
    const repeatedFavorite = favorite.find(
      (favorite) => favorite.id === newFavorite.id
    );

    if (!repeatedFavorite)
      return setFavorite((prevFavorites) => [...prevFavorites, newFavorite]);

    return setFavorite((prevFavorites) =>
      [...prevFavorites].filter((favorite) => favorite.id !== newFavorite.id)
    );
  }

  return { favorite, addFavorite };
}
