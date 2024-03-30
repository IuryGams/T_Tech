"use client"

import FeaturedSession from "@/shared/components/FeaturedSession";
import { useFavoriteContext } from "@/shared/contexts/FavContext";
import { LimitSlider } from "@/styles/genericStyled";
import { FaHeart, FaShoppingCart  } from "react-icons/fa";
import Image from "next/image";
import styled from "styled-components";
import Button from "@/shared/components/Button";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    margin-top: 2rem;
    gap: 0.625rem;
`

const CardFavorite = styled.div`
    width: 100%;
    height: 11.5625rem;
    padding: 1.5rem;
    background: rgb(255, 255, 255);
    border-radius: 0.125rem;
    transition: width 1s ease 0s;
    box-shadow: rgba(40, 41, 61, 0.08) 0px 0px 1px, rgba(96, 97, 112, 0.16) 0px 0.5px 2px;
    display: grid;
    column-gap: 3.375rem;
    grid-template:
        "productImage productInfo productDivider productPrice productActions" 1fr
        "productImage productRating productDivider productPrice productActions" 1fr / min-content auto min-content min-content min-content;
`

const BoxImage = styled.picture`
    width: 138px;
    height: 138px;
    grid-area: productImage;
    background-color: black;

    img{
        object-fit: cover;
    }
`

const Infor = styled.div`
    width: 100%;
    grid-area: productInfo;

    span{
        color: var(--subtext-color);
    }

    h2{
        font-size: 1rem;
        line-height: 1.5rem;
        font-weight: 600;
        max-height: 72px;
        color: var(--text-primary-color);
        word-break: break-word;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
    }
`

const Division = styled.div`
    display: flex;
    height: 7.75rem;
    align-self: center;
    width: 0.0625rem;
    background-color: rgb(222,224,228);
    grid-area: productDivider;
`

const Price = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    -webkit-box-pack: center;
    justify-content: center;
    font-size: 18px;
    width: 10rem;
    grid-area: productPrice;

    del{
        font-size: 75%;
        font-weight: 400;
        color: var(--subtext-color);
        text-decoration: line-through;
    }

    p{
        font-size: 65%;
        color: var(--subtext-color);
    }
`

const Actions = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    -webkit-box-pack: justify;
    justify-content: space-between;
    width: 19.6875rem;
    padding-block: 20px;
    grid-area: productActions;
`




export default function FavoritePage () {

    const { favorites } = useFavoriteContext(); 

    return(
        <FeaturedSession title="Meus Favoritos">
            <LimitSlider>
                <Container>
                    {favorites.map( favorite => {
                        return(
                            <CardFavorite key={favorite.id}>
                                <BoxImage>
                                    {/* <Image src={favorite.image} alt={favorite.name}/> */}
                                </BoxImage>
                                <Infor>
                                    <span>Iphone</span>
                                    <h2>{favorite.name}</h2>
                                </Infor>
                                <div style={{gridArea: "productRating", width: "min-content"}}>

                                </div>
                                <Division/>
                                <Price>
                                    <del>R$&nbsp;{Number(favorite.price)}</del>
                                    <h2>R$&nbsp;{Number(favorite.price)}</h2>
                                    <p>À vista no <b>PIX</b></p>
                                </Price>
                                <Actions>
                                    <FaHeart size={20} style={{fill: "var(--primary-color)"}} />
                                    <Button >
                                        <FaShoppingCart />
                                        Comprar
                                    </Button>
                                </Actions>
                            </CardFavorite>
                        )
                    })}
                </Container>
            </LimitSlider>
        </FeaturedSession>
    )
}