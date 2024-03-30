"use client";

import styled from "styled-components";



export const Container = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 40%;
    height: 100%;

    h2{
        font-size: 20px;
        margin-bottom: 20px;
        color: var(--text-primary-color);
    }

  
`

export const Content = styled.div`
    min-height: 350px;
    height: 100%;

    p, span{
        margin-bottom: 15px;
    }

    dl{
        display: grid;
        grid-template-columns: 30% 70%;
        grid-auto-rows: 40px;
        height: 100%;

        dt, dd {
            border-bottom: 1px solid #ced1d6;

            &:nth-of-type(1n){
                background-color: white;
            }
            
            &:nth-of-type(2n){
                background-color: #ececec;
            }
        }
    }



    

    
`