"use client";
import styled from "styled-components";


export const BoxFlex = styled.div<{ 
    $alignItens: "flex-start" | "center" | "flex-end"; 
    $justifyContent: "flex-start" | "center" | "flex-end" | "space-between" | "space-evenly" | "space-around";
}>`
    display: flex;
    align-items: ${({$alignItens}) => $alignItens};
    justify-content: ${({$justifyContent}) => $justifyContent};
    width: 100%;
    gap: 12px;
`