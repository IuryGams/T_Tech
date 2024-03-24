"use client";
import Image from "next/image";
import { 
    BoxImage, BoxOptions, BoxPrice, BoxProduct, 
    BoxSliderImage, ContainerGallery, DescriptionProduct, FullPrice, PriceProduct, ProductBody, TitleProduct 
} from "./styled";
import FormatCoin from "@/shared/lib/FormatCoin";

import { Images, Products, Reviews } from "@prisma/client";

import { LabelSale } from "@/shared/components/ProductCard/styled";
import SelectQuantity from "@/shared/components/SelectQuantity";
import ProductReview from "@/shared/components/ProductReviews";
import SelectColor from "@/shared/components/SelectColor";
import SelectSize from "@/shared/components/SelectSize";
import { useState } from "react";
import HorizontalDash from "@/shared/components/HorizontalDash";
import Button from "@/shared/components/Button";

export default function Product({ product, sizeOption, colorOption }: {
    product?: Products & {
        images: Images[]
    } & {
        reviews: Reviews[]
    };
    colorOption?: boolean;
    sizeOption?: boolean;
}) {
    
    const [quantity, setQuantity] = useState<number>(1);
    const [color, setColor] = useState<string | null>("#000");
    const selectedImage = Number( product?.images.findIndex(image => image.color === color || image.color_code === color) ) ;

    const changeQuantity = (value: "plus" | "less") => {
        if(value === "plus") {
            quantity < Number(product?.quantity) ? setQuantity(quantity + 1) : setQuantity(Number(product?.quantity))
        } else {
            quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
        }
    };
    
    return (
        <>
            <BoxProduct>

                <ContainerGallery>
                    <BoxImage>
                        <Image src={product?.images[selectedImage].image || ""} alt={product?.name || "Não foi possivel carregar a imagem"} fill />
                    </BoxImage>
                    <BoxSliderImage>

                    </BoxSliderImage>
                </ContainerGallery>

                <ProductBody>
                    <TitleProduct>{product?.name}</TitleProduct>
                    <ProductReview justifyContent="flex-start" gap={1} size={20} 
                    reviews={product?.reviews} />
                    <HorizontalDash />
                    <DescriptionProduct>{product?.description}</DescriptionProduct>
                    <BoxOptions>
                        {colorOption && 
                            <SelectColor 
                                images={product?.images}
                                color={color}
                                setColor={setColor}  
                            />
                        }
                        <HorizontalDash />
                        {sizeOption && <SelectSize />}
                        <HorizontalDash />
                        <SelectQuantity quantity={quantity} fnQuantity={changeQuantity} />
                        <HorizontalDash />
                        <BoxPrice>
                            <PriceProduct>
                                {FormatCoin(Number(product?.price), "BRL")}
                            </PriceProduct>
                            <FullPrice>
                                <LabelSale>-20%</LabelSale>
                                {FormatCoin(Number(product?.price), "BRL")}
                            </FullPrice>
                        </BoxPrice>
                        <div style={{width: "180px"}}>
                            <Button>
                                Comprar
                            </Button>
                        </div>
                    </BoxOptions>

                    <HorizontalDash />
                </ProductBody>
            </BoxProduct>
        </>
    )
}

