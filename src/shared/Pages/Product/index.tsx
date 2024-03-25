"use client";
import { BoxProduct } from "./styled";
import { Images, Products, Reviews } from "@prisma/client";
import { useState } from "react";
import ProductBody from "@/shared/components/Product/ProductBody";
import SliderProduct from "@/shared/components/Product/SliderProduct";
import ProductDetails from "@/shared/components/Product/ProductDetails";

export default function Product({ product }: {
    product?: Products & {
        images: Images[]
        reviews: Reviews[]
    }
}) {

    const [color, setColor] = useState<string | null>("#000");

    return (
        <main>
            <BoxProduct>
                <SliderProduct product={product} />
                <ProductBody product={product} colorOption sizeOption color={color} setColor={setColor} />
            </BoxProduct>
            <ProductDetails />
        </main>
    )
}

