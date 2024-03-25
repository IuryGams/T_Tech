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

    const handlePlus = (): void => {
        quantity < Number(product?.quantity) ? setQuantity(quantity + 1) : setQuantity(Number(product?.quantity))
    };

    const handleLess = (): void => {
        quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
    }

    return (
        <>
            <ContainerDefinitionList >
                <dt>Quantidade:</dt>
                <BoxQuantity>
                    <IconPlus onClick={handleLess}  >
                        <BsDashLg size={20} aria-disabled={false} />
                    </IconPlus>
                    <input type="text" defaultValue={quantity} readOnly />
                    <IconDash onClick={handlePlus}  >
                        <GoPlus />
                    </IconDash>
                </BoxQuantity>
            </ContainerDefinitionList>
            <HorizontalDash />
        </>
    );
}

