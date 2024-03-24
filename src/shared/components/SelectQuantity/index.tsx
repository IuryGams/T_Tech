import { ContainerDefinitionList } from '@/shared/Pages/Product/styled';
import React, { useState } from 'react';
import { BoxQuantity, IconDash, IconPlus } from './styled';
import { BsDashLg } from 'react-icons/bs';
import { GoPlus } from 'react-icons/go';

export default function SelectQuantity({quantity, fnQuantity} : {
    quantity: number;
    fnQuantity: (value: "plus" | "less") => void;
}) {


    return (
        <ContainerDefinitionList >
        <dt>Quantidade:</dt>
        <BoxQuantity>
            <IconPlus onClick={() => fnQuantity('less')}  >
                <BsDashLg size={20} aria-disabled={false} />
            </IconPlus>
            <input type="text" defaultValue={quantity} />
            <IconDash onClick={() => fnQuantity('plus')}  >
                <GoPlus />
            </IconDash>
        </BoxQuantity>
    </ContainerDefinitionList>
    );
}

