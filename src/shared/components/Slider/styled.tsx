"use client";

import styled from "styled-components";


export const ContainerSlider = styled.section`
    height: 50dvh;
    width: 100%;
    background-color: aliceblue;
    position: relative;
    max-width: 1440px;
    margin: 0 auto;
    overflow: hidden;
`

export const BoxSlider = styled.div<{ $indexSlider: number }>`
    display: flex;
    height: 100%;
    transition: all 0.5s ease-in-out;
    scroll-behavior: smooth;
    transform: ${({$indexSlider}) => `translateX(-${$indexSlider * 100}%)` };

    figure{
        width: 100%;
        height: 100%;
        flex: none;
        position: relative;

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    
`

export const ContainerButtons = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1em;

    button{
        display: flex;
        align-items: center;
        border: none;
        background-color: transparent;
        color: white;
        justify-content: center;
        border-radius: 100%;
        cursor: pointer;
        opacity: 0.2;

        &:hover{
            opacity: 0.9;
        }
    }
`

export const ContainerDotters = styled.div`
    position: absolute;
    top: 92%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
`

export const StyledDotter = styled.span<{ $numberSlider: number, $indexSlide: number }>`
    width: ${({$numberSlider, $indexSlide}) => $numberSlider === $indexSlide ? "26px" : "14px"};
    height: 14px;
    background-color: white;
    border-radius: ${({$numberSlider, $indexSlide}) => $numberSlider === $indexSlide ? "6px" : "100%"};
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    opacity: ${({$numberSlider, $indexSlide}) => $numberSlider === $indexSlide ? "1" : "0.6"};
`