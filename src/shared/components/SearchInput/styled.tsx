"use client";

import styled from "styled-components";

export const ContainerInputSearch = styled.form`
    border: none;
    background-color: white;
    border-radius: 4px;
    display: flex;
    align-items: center;
    height: 50px;
    overflow: hidden;
    width: 100%;
    min-width: 300px;
`

export const StyledInput = styled.input`
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    margin-right: 5px;
    font-size: 16px;
    padding: 0 10px;
`

export const BoxIcon = styled.i`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    cursor: pointer;
    border: none;
    background-color: var(--primary-color);
`