"use client";
import styled from "styled-components";

export const BoxQuantity = styled.dd`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border: 1px solid var(--secondary-color);
    height: 40px;
    border-radius: 3px;

    i{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    input{
        width: 80px;
        height: 40px;
        border: none;
        outline: none;
        text-align: center;
        background-color: transparent;
    }
`

export const BoxIcon = styled.i`
    cursor: pointer;
    width: 40px;
    height: 40px;
    line-height: 38px;
    z-index: 2;
    font-size: 1.625rem;
    font-weight: 300 !important;
    color: #999;

    &:hover{
        color: var(--primary-color);
    }
`

export const IconPlus = styled(BoxIcon)`
    top: 0;
    right: 0;
`

export const IconDash = styled(BoxIcon)`
    top: 0;
    left: 0;
`