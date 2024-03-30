"use client";
import Image from "next/image";
import { BoxAddCart, BoxImage, BoxProductLabel, Btns, Category, ContainerCard, FullPrice, LabelNew, LabelSale, Price, ProductBody, Title, } from "./styled";
import { FaCartPlus, FaHeart, FaRegHeart } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import Link from "next/link";
import FormatCoin from "@/shared/lib/FormatCoin";
import ProductReview from "../ProductReviews";
import { useFavoriteContext } from "@/shared/contexts/FavContext";


export default function ProductCard( {product} : any) {

    const { favorites, addFavorite } = useFavoriteContext();

    const isFavorite = favorites.some(fav => fav.id === product.id);
    const Icon = isFavorite ? <FaHeart size={16} style={{ fill: "var(--primary-color)"}}  /> : <FaRegHeart size={16} />
 
    return (
        <ContainerCard>

            <BoxProductLabel>
                <LabelNew>NOVO</LabelNew>
                <LabelSale>-30%</LabelSale>
            </BoxProductLabel>

            <Link href={`/products/${product.id}`} style={{position: "relative", zIndex: 5}}>

                <BoxImage>
                    <Image src={product.images[0].image} alt={product.name} fill />
                </BoxImage>
                <ProductBody>

                    <Category>{product.category.name}</Category>
                    <Title>{product.name}</Title>
                    <Price>
                        {FormatCoin(product.price, "BRL")} 
                        <FullPrice>{FormatCoin(product.price, "BRL")}</FullPrice>
                    </Price>
                    <ProductReview 
                        reviews={product.reviews} 
                        showReviews={false} 
                        justifyContent="center" 
                        gap={5}
                        size={20}
                    />

                </ProductBody>
            </Link>
            <Btns>
                <button onClick={() => addFavorite(product)} >
                    <i>
                        {Icon}
                    </i>
                    <span>Favoritar</span>
                </button>
                <button>
                    <i>
                        <FaEye size={16} />
                    </i>
                    <span>Olhadinha</span>
                </button>
            </Btns>

            <BoxAddCart>
                <button> <FaCartPlus size={20}/> Adicionar ao Carrinho</button>
            </BoxAddCart>
        </ContainerCard>
    )
}