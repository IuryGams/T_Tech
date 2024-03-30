

import React from 'react';
import { Arrow, Carrousel, Container } from './styled';
import ProductCard from '../ProductCard';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import getCategoryProduct from '@/shared/actions/getCategory';

export default async function CarrouselProducts({ products }: any) {
    return (
        <Container>
            <Arrow>
                <FaAngleLeft size={48} />
            </Arrow>
            <Carrousel>
                {products?.map((product: any) =>
                    <ProductCard key={product.id} product={product} />
                )}
            </Carrousel>
            <Arrow>
                <FaAngleRight size={48} />
            </Arrow>

        </Container>
    );
}