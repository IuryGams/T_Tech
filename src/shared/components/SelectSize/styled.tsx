"use client";
import styled from "styled-components";

export const SelectBoxSize = styled.ul`
    display: flex;
    align-items: center;
    gap: 8px;
    height: 40px;
    outline: none;

    li{
        display: flex;
        align-items: center;
        justify-content: center;    
        font-size: 12px;
        background-color: white;
        color: black;
        border: 1px solid var(--secondary-color);
        width: 40px;
        height: 40px;
        cursor: pointer;
    }
`