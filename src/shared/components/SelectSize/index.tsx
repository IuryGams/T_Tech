import { ContainerDefinitionList} from '@/shared/Pages/Product/styled';
import React from 'react';
import { SelectBoxSize } from './styled';

export default function SelectSize() {

    const sizes = [
        "P",
        "M",
        "G",
        "XG"
    ]

    return (
        <ContainerDefinitionList style={{ gridArea: "size" }}>
            <dt>Tamanho:</dt>
            <dd>
                <SelectBoxSize >
                    {sizes.map((size, index) => {
                        return <li key={index} >{size}</li>
                    })}
                </SelectBoxSize>
            </dd>
        </ContainerDefinitionList>
    );
}