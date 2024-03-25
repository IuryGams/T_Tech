"use client";
import { BoxProduct} from "./styled";
import { Images, Products, Reviews } from "@prisma/client";
import { useState } from "react";
import ProductBody from "@/shared/components/ProductBody";
import SliderProduct from "@/shared/components/SliderProduct";

export default function Product({ product}: {
    product?: Products & {
        images: Images[]
        reviews: Reviews[]
    }
}) {

    const [color, setColor] = useState<string | null>("#000");

    const selectedImage = Number(product?.images.findIndex(image => image.color === color || image.color_code === color));

    

    return (
        <>
            <BoxProduct>

                <SliderProduct product={product} selectedImage={selectedImage}/>

                <ProductBody product={product} colorOption sizeOption color={color} setColor={setColor} />

            </BoxProduct>
        </>
    )
}

