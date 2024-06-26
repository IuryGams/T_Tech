import React from 'react';
import { SelectBoxSize } from './styled';
import HorizontalDash from '../HorizontalDash';
import { ContainerDefinitionList } from '@/styles/genericStyled';

export default function SelectSize() {

    const sizes = [
        "P",
        "M",
        "G",
        "XG"
    ]

    return (
        <>
            <ContainerDefinitionList>
                <dt>Tamanho:</dt>
                <dd>
                    <SelectBoxSize >
                        {sizes.map((size, index) => {
                            return <li key={index} >{size}</li>
                        })}
                    </SelectBoxSize>
                </dd>
            </ContainerDefinitionList>
            <HorizontalDash />
        </>
    );
}