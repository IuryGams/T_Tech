import React, { useState } from 'react';
import { BoxQuantity, IconDash, IconPlus } from './styled';
import { BsDashLg } from 'react-icons/bs';
import { GoPlus } from 'react-icons/go';
import HorizontalDash from '../HorizontalDash';
import { ContainerDefinitionList } from '@/styles/genericStyled';
import { Products } from '@prisma/client';

export default function SelectQuantity({ product }: {
    product?: Products;
}) {

    const [quantity, setQuantity] = useState<number>(1);

    const changeQuantity = (value: "plus" | "less") => {
        if (value === "plus") {
            quantity < Number(product?.quantity) ? setQuantity(quantity + 1) : setQuantity(Number(product?.quantity))
        } else {
            quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
        }
    };

    return (
        <>
            <ContainerDefinitionList >
                <dt>Quantidade:</dt>
                <BoxQuantity>
                    <IconPlus onClick={() => changeQuantity("less")}  >
                        <BsDashLg size={20} aria-disabled={false} />
                    </IconPlus>
                    <input type="text" defaultValue={quantity} readOnly />
                    <IconDash onClick={() => changeQuantity('plus')}  >
                        <GoPlus />
                    </IconDash>
                </BoxQuantity>
            </ContainerDefinitionList>
            <HorizontalDash />
        </>
    );
}

