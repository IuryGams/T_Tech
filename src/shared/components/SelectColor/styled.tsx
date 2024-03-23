"use client";
import styled from "styled-components";

export const ColorList = styled.ul`
    display: flex;
    align-items: center;
    gap: 8px;
`

export const ItemList = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
    padding: 3px;

    span {
        padding: 3px;
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: slateblue;
    }
`

