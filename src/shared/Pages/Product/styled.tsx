"use client";
import styled from "styled-components";

export const ContainerProduct = styled.section`
    max-width: 1440px;
    margin: 0 auto;
    background-color: white;
`


export const BoxProduct = styled.div`
    display: flex;
    padding: 1em;
    gap: 8px;
`

export const ContainerGallery = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    gap: 8px;
`

export const BoxImage = styled.figure`
    position: relative;
    width: 100%;
    height: 450px;
    
    img{
        object-fit: cover;
    }
`

export const BoxSliderImage = styled.div`
    display: flex;
`

export const ProductBody = styled.article`
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
    padding: 0.5em;
`

export const TitleProduct = styled.h2`
    font-size: 22px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-word;
    max-height: 60px;
    color: var(--text-primary-color);
`

export const DescriptionProduct = styled.p`
    padding: 0.5em 0;
    font-size: 16px;
`

export const BoxOptions = styled.div`
    display: grid;
    grid-template-columns: 45% 55%;
    grid-template-rows: repeat(3, 40px) 60px;
    grid-template-areas: 
    "color color"
    "size size"
    "quantity quantity";
    gap: 12px;
    margin: 20px 0;
    align-items: center;
`

export const ContainerDefinitionList = styled.dl`
    grid-column: 2 span;

    display: flex;
    align-items: center;

    > dt{
        width: 45%;
        font-weight: bold;
        font-size: 16px;
        color: var(--text-primary-color);
    }
    > dd {
        width: fit-content;
    }
`

export const BoxPrice = styled.div`
    grid-row: 4 / 5;
    grid-column: 1 / 2;
    display: flex;
    width: 40%;
    gap: 8px;
    font-size: 28px;
`

export const PriceProduct = styled.h3`
    font-size: 1em;
    color: var(--primary-color);
`

export const FullPrice = styled.del`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 55%;
    font-weight: 400;
    color: var(--subtext-color);
    text-decoration: line-through;
`

export const BoxBtn = styled.div`
    grid-column: 2 / 3;
    grid-row: 4 / 5;

    button{
        cursor: pointer;
        background-color: var(--button-color);
        font-family: 'Nunito', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        color: white;
        border: 2px solid transparent;
        width: 160px;
        height: 40px;
        padding: 0 15px;
        text-transform: uppercase;
        font-weight: bold;
        border-radius: 3px;
        white-space: nowrap;
        transition: all 0.3s ease-in-out;
        font-size: 20px;

        &:hover{
            gap: 18px;
            background-color: white;
            border: 2px solid var(--primary-color);
            color: var(--primary-color);

            svg{
                opacity: 1;
                width: initial;
                height: initial;
            }
        }
    }
`