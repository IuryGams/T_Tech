"use client";
import styled from "styled-components"

export const Gallery = styled.div`
    display: grid;
    grid-template-columns: 20% 80%;
    grid-template-rows: 1fr;
    width: 50%;
    column-gap: 10px;
    overflow: hidden;
    max-height: 600px;
`

export const BoxSliderImage = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 0 5px;
    overflow-y: auto;
    overflow-x: hidden;

    &::-webkit-scrollbar{
        visibility: hidden;
        display: none;
    }
`

export const UnfocusedImage = styled.picture`
    flex: none;
    position: relative;
    cursor: pointer;

    img{
        object-fit: cover;
    }
`

export const FocusImage = styled.picture`
    grid-column: 2 / 3;
    grid-row: 1 / 5;
    position: relative;
    overflow: hidden;
    cursor: none;
    
    img{
        object-fit: cover;
    }
`

export const Zoom = styled.div`
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 1px solid var(--primary-color);
    background-size: 500%;
    background-position: center;
    pointer-events: none;
    transform: translate(-50%, -50%);
`



