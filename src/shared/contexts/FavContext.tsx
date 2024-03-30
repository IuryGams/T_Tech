"use client";
import { Products } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";
import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";

export type ProductContext = {
    favorites: Products[];
    setFavorites: Dispatch<SetStateAction<Products[]>>;
}

export const defaultState: ProductContext  = {
    favorites: [],
    setFavorites: () => {}
}

export const FavoritesContext = createContext(defaultState);
FavoritesContext.displayName = "MyFavorites";

export function FavoritesProvider({children} : {
    children: React.ReactNode;
}) { 
    const [favorites, setFavorites] = useState<Products[]>([]);

    return(
        <FavoritesContext.Provider value={{ favorites, setFavorites }} >
            {children}
        </FavoritesContext.Provider>
    )
}

export function useFavoriteContext() {

    const { favorites, setFavorites } = useContext(FavoritesContext);

    function addFavorite(newFavorite: Products) {
        const repeatedFavovite = favorites.some( (fav) => fav.id === newFavorite.id)

        let newFavs = [...favorites]

        if(!repeatedFavovite) {
            newFavs.push(newFavorite);
            return setFavorites(newFavs);
        }

        newFavs = favorites.filter( (fav: any) => fav.id !== newFavorite.id)

        return setFavorites(newFavs)
    }

    return {
        favorites,
        addFavorite
    }
}
