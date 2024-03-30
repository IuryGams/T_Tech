"use client";
import { FavoritesProvider } from "../contexts/FavContext";



export default function Providers ({children}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <FavoritesProvider>
                {children}
            </FavoritesProvider>
        </>
    )
}