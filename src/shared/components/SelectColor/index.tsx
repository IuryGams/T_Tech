"use client";
import React, { Dispatch, SetStateAction, useState } from 'react';
import { ColorList, ItemList } from './styled';
import { ContainerDefinitionList } from '@/shared/Pages/Product/styled';
import { Images } from '@prisma/client';

interface ColorProps {
    images?: Images[];
    color: string | null;
    setColor: Dispatch<SetStateAction<string | null>>
}

export default function SelectColor({images, color, setColor} : ColorProps) {
    return (
        <ContainerDefinitionList style={{ gridArea: "color" }}>
            <dt>Cor:</dt>
            <dd>
                <ColorList>
                    {images?.map(image => {

                        const styleColor = {
                            border: (color == image.color || color == image.color_code) ? 
                            "2px solid var(--primary-color)" : 
                            "2px solid transparent"
                        };

                        return(
                            <ItemList key={image.color} style={styleColor} onClick={() => setColor(image.color || image.color_code)} >
                                <span style={{ backgroundColor: `${image.color}` }} ></span>
                            </ItemList>
                        )
                    })}
                </ColorList>
            </dd>
        </ContainerDefinitionList>
    );
}