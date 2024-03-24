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
    display: flex;
    flex-direction: column;
    grid-template-columns: 45% 55%;
    gap: 6px;
    margin: 20px 0;
`

export const ContainerDefinitionList = styled.dl`
    grid-column: 2 span;

    display: flex;
    align-items: center;

    > dt{
        width: 35%;
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