"use client";
import styled from "styled-components";


export const ContainerSection = styled.section`
    max-width: 1440px;
    margin: 0 auto;
`

export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5em 1em;
    gap: 16px;
    color: var(--text-primary-color);
    font-size: 24px;
    margin: 15px 0;
    position: relative;
    text-transform: uppercase;

    h2{
        font-size: 1em;
    }

    b, p {
        font-size: 0.9em;
    }
`

export const BoxTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`

export const ContainerGrid = styled.div`
    display: grid;
    padding: 1em 0;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 16px;
    align-items: center;
    justify-items: center;
`

