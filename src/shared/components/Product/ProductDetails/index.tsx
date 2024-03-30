
import { Products } from '@prisma/client';
import React from 'react';
import { BoxDetails, Container, LimitContent } from './styled';
import ArticleBox from '../../ArticleBox';

export default function ProductDetails({ product }: {
    product?: Products;
}) {
    return (
        <Container>
            <LimitContent>
                <BoxDetails>
                    <ArticleBox title="Detalhes">
                        
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ipsum optio perspiciatis quos harum impedit, at, cupiditate itaque deleniti molestiae officiis necessitatibus dicta quae esse qui quaerat. Voluptates, incidunt eveniet.</p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat cumque quas exercitationem veniam ducimus aliquam eum, similique deserunt sit aspernatur perferendis dignissimos? Culpa incidunt sequi in veritatis quidem placeat earum!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolorum odit distinctio quidem, placeat delectus ut sapiente voluptate ipsam. Voluptatem similique exercitationem quae alias sapiente aut error ratione architecto ex.</p>
                        
                    </ArticleBox>

                    <ArticleBox title="Especificações">
                        <dl>
                            <dt>Cor</dt>
                            <dd>Preto</dd>
                            <dt>Tamanho</dt>
                            <dd>P150 x L100 x A100</dd>
                            <dt>Peso</dt>
                            <dd>0.5 KG</dd>
                            <dt>Marca</dt>
                            <dd>Apple</dd>
                        </dl>
                    </ArticleBox>
                </BoxDetails>
            </LimitContent>
        </Container>
    );
}

