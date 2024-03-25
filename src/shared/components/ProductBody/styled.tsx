"use client";
import styled from "styled-components";

export const Container = styled.article`
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

export const StockBox = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    margin-top: 15px;
    font-size: 14px;
    color: var(--button-color);

    i{
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        cursor: pointer;

        &:hover{
            
            span{
                bottom: 110%;
                opacity: 0.9;
            }
        }

        span{
            transition: all 0.2s ease-in-out;
            position: absolute;
            width: fit-content;
            border-radius: 6px;
            bottom: 0%;
            left: 50%;
            transform: translateX(-50%);
            padding: 6px 10px;
            white-space: nowrap;
            font-size: 12px;
            pointer-events: none;
            opacity: 0;
            background-color: var(--background-color);
            color: white;
            text-align: center;
        }
    }
`


export const BoxPrice = styled.div`
    display: flex;
    width: 40%;
    gap: 8px;
    font-size: 28px;
    margin-top: 10px;
    position: relative;
`

export const PriceProduct = styled.h3`
    font-size: 1em;
    color: var(--primary-color);
`

export const FullPrice = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    align-items: center;
    font-size: 45%;
    font-weight: 400;
    color: var(--subtext-color);
`

export const OldPrice = styled.del`
    text-decoration: line-through;
    color: var(--subtext-color);
    align-items: center;
    font-size: 100%;
    font-weight: 400;
    color: var(--subtext-color);
`