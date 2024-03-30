"use client";
import styled from "styled-components";


export const BoxFlex = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 12px;
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

export const LimitSlider = styled.div`
    display: flex;
    align-items: center;
    max-width: 1440px;
    margin: 0 auto;

    > div {
        height: 100%;
    }
`