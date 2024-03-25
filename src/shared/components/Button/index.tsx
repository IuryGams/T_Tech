"use client";
import { ReactNode } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    cursor: pointer;
    background-color: var(--button-color);
    font-family: 'Nunito', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color: white;
    border: 2px solid transparent;
    width: 100%;
    height: 40px;
    padding: 0 15px;
    text-transform: uppercase;
    font-weight: bold;
    border-radius: 3px;
    white-space: nowrap;
    transition: all 0.3s ease-in-out;
    font-size: 20px;

    &:hover{
        gap: 18px;
        background-color: white;
        border: 2px solid var(--primary-color);
        color: var(--primary-color);

        svg{
            opacity: 1;
            width: initial;
            height: initial;
        }
    }
`

export default function Button({children}: {
    children: ReactNode;
}) {
    return <StyledButton>{children}</StyledButton>
}

