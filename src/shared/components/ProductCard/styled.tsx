"use client";

import Link from "next/link";
import styled from "styled-components";


export const BoxAddCart = styled.div`
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 1px;
    padding: 10px 15px;
    background: var(--background-color);
    text-align: center;
    -webkit-transform: translateY(0%);
    -ms-transform: translateY(0%);
    transform: translateY(0%);
    -webkit-transition: 0.2s all;
    transition: 0.2s all;
    z-index: 1;
    opacity: 0;
    pointer-events: none;
    border-radius: 0 0 6px 6px;

    display: flex;
    align-items: center;
    justify-content: center;

    button {
        cursor: pointer;
        background-color: var(--button-color);
        font-family: 'Nunito', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        color: white;
        border: 2px solid transparent;
        height: 40px;
        padding: 0 15px;
        text-transform: uppercase;
        font-weight: bold;
        border-radius: 8px;
        white-space: nowrap;
        transition: all 0.3s ease-in-out;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;

        svg{
            opacity: 0;
            width: 0;
            height: 0;
        }

        &:hover{
            /* padding-left: 25px; */
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

export const ContainerCard = styled.div`
    position: relative;
    flex: none;
    width: 264px;
    padding: 1em;
    box-shadow: 0px 0px 0px 0px var(--secondary-color), 0px 0px 0px 1px var(--secondary-color);
    background-color: white;
    transition: all 0.1s ease-in-out;
    margin-bottom: 60px;

    &:hover{
        box-shadow: 0px 0px 6px 0px var(--secondary-color), 0px 0px 0px 2px var(--primary-color);

        ${BoxAddCart} {
            transform: translateY(100%);
            box-shadow: 0px 0px 6px 0px var(--background-color), 0px 0px 0px 2px var(--background-color);
            opacity: 1;
            pointer-events: initial;
        }
    }
`

export const BoxImage = styled.picture`
    display: block;
    position: relative;
    width: 100%;
    height: 160px;
    padding: 0.5em;
    mix-blend-mode: multiply;

    img{
        display: block;
    }

`

export const BoxProductLabel = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 6px;
    margin-bottom: 5px;
`

export const StyledLabel = styled.span`
    border: 2px solid var(--primary-color);
    padding: 2px 10px;
    font-size: 12px;
`

export const LabelNew = styled(StyledLabel)`
    color: white;
    background-color: var(--primary-color);
`

export const LabelSale = styled(StyledLabel)`
    color: var(--primary-color);
    background-color: white;
`

export const ProductBody = styled.article`
    padding: 10px;
    text-align: center;
    z-index: 20;
`

export const Category = styled.span`
    color: var(--subtext-color);
    margin-bottom: 10px;
    text-transform: uppercase;
    font-size: 12px;
`

export const Title = styled.h3`
    color: var(--text-primary-color);
    margin: 10px 0;
    text-transform: uppercase;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-word;
    height: 36px;
    max-height: 36px;
`

export const Price = styled.h4`
    display: flex;
    flex-direction: column;
    font-size: 22px;
    color: var(--primary-color);
    margin-bottom: 10px;
`

export const FullPrice = styled.del`
    font-size: 70%;
    font-weight: 400;
    color: var(--subtext-color);
    text-decoration: line-through;
`

export const Btns = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    > button{
        position: relative;
        width: 40px;
        height: 40px;
        border: none;
        background-color: transparent;
        transition: all 0.2s ease-in-out;
        cursor: pointer;

        &:hover{
            background-color: var(--secondary-color);
            border-radius: 50%;
            color: var(--primary-color);

            > span{
                opacity: 1;
                visibility: visible;
                transform: translate(-50%, -5px);
            }
        }

        > i {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        > span {
            position: absolute;
            bottom: 100%;
            left: 50%;
            -webkit-transform: translate(-50%, -15px);
            -ms-transform: translate(-50%, -15px);
            transform: translate(-50%, -15px);
            width: 150px;
            padding: 10px;
            font-size: 12px;
            line-height: 10px;
            background: var(--background-color);
            color: #FFF;
            text-transform: uppercase;
            z-index: 10;
            opacity: 0;
            visibility: hidden;
            -webkit-transition: 0.2s all;
            transition: 0.2s all;
        }
    }
`

