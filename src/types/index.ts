import { Categories, Images, Products } from "@prisma/client";

export interface CardProps {
    product?: Products | null
    images?: Images[] | null;
    category: Categories
}

export interface ProductProps {
    product: Products;
    images: Images[];
}