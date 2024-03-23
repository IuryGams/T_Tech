"use client";

import styled from "styled-components";



export const SessionCategories =  styled.section`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 24px;
    height: 40dvh;
    padding: 1em 3em;
    position: relative;
    overflow-x: auto;
`

export const BoxDepartament = styled.div`
    height: 100%;
    flex: none;
    width: 315px;
    border-radius: 16px;
    overflow: hidden;
    position: relative;
    transition: all 0.2s ease-in-out;
    aspect-ratio: 3 / 2;

    &:hover{
        
        figure{
                transform: scale(1.1);
            
        }
    }

    &::before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        width: 50%;
        opacity: 0.9;
        transform: skewX(-45deg);
        background-color: var(--primary-color);
        z-index: 2;
        pointer-events: none;
    }

    &::after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 1px;
        width: 100%;
        pointer-events: none;
        background: var(--primary-color);
        opacity: 0.9;
        -webkit-transform: skewX(-45deg) translateX(-100%);
        -ms-transform: skewX(-45deg) translateX(-100%);
        transform: skewX(-45deg) translateX(-100%);
        z-index: 3;
    }
`

export const DepartamentBoxImage = styled.figure`
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 0;
    transition: all 0.2s ease-in-out;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export const DepartamentBody = styled.article`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 75%;
    z-index: 4;
    padding: 30px;
    color: white;

    h3{
        font-size: 20px;
    }



    span{
        margin-top: 10px;
        display: flex;
        align-items: center;
        gap: 8px;
    }
`