"use client";

import Link from "next/link";
import styled from "styled-components";

export const ContainerHeader = styled.header`
    display: flex;
    flex-direction: column;
    height: 10dvh;
    background-color: var(--background-color);
    color: white;
    border-bottom: 3px solid var(--primary-color);
`
 
export const TopHeader = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-around;
    max-width: 1440px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    

    & > * {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        border-left: 1px solid rgb(244, 244, 246)
    }
`


export const Title = styled.h1`
    border: none;
    padding: 0 16px;
    
    a{
        color: white;
    }
`

export const BoxItem = styled.div`
    min-width: 160px;

    &:hover {
        background-color: salmon;
    }
`

export const LinkPrimaryOption = styled(Link)`
    width: 100%;
    height: 100%;
    display: grid;
    color: white;
    grid-template-columns: 30% 70%;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: 
    "icon title"
    "icon title";
    padding: 0 0.75em;
    gap: 8px;
    ;

    b{
        font-size: 15px;
        align-self: center;
        grid-area: title;
    }
`

export const BoxIcon = styled.i`
    display: flex;
    align-items: center;
    justify-content: center;
    grid-area: icon;
    color: white;
    fill: white;
`

export const LinkSecondaryOption = styled(LinkPrimaryOption)`
    grid-template-areas: 
    "icon title"
    "icon text";
    row-gap: 2px;

    b{
        grid-area: title;
        align-self: flex-end;
    }

    a{
        grid-area: text;
    }
`