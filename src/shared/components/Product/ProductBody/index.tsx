import { Images, Products, Reviews } from "@prisma/client";
import { BoxOptions, BoxPrice, Container, DescriptionProduct, FavButton, FullPrice, OldPrice, PriceProduct, StockBox, TitleProduct } from "./styled";
import ProductReview from "../../ProductReviews";
import SelectColor from "../../SelectColor";
import { Dispatch, SetStateAction } from "react";
import SelectSize from "../../SelectSize";
import SelectQuantity from "../../SelectQuantity";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaExclamationCircle, FaRegHeart, FaHeart } from "react-icons/fa";
import { BoxFlex } from "@/styles/genericStyled";
import LabelOffer from "../../LabelOffer";
import FormatCoin from "@/shared/lib/FormatCoin";
import Button from "../../Button";
import HorizontalDash from "../../HorizontalDash";


export default function ProductBody({ product, colorOption, sizeOption, color, setColor }: {
    product?: Products & {
        images: Images[]
        reviews: Reviews[]
    };
    color: string | null;
    setColor: Dispatch<SetStateAction<string | null>>
    colorOption?: boolean;
    sizeOption?: boolean;
}) {

    return (
        <Container>
            <TitleProduct>{product?.name}</TitleProduct>
            <ProductReview justifyContent="flex-start" gap={1} size={20} reviews={product?.reviews} />
            <DescriptionProduct>{product?.description}</DescriptionProduct>

            <BoxOptions>

                {colorOption && <SelectColor
                        images={product?.images}
                        color={color}
                        setColor={setColor} />
                }
                {sizeOption && <SelectSize />}
                <SelectQuantity product={product} />

                <StockBox>
                    <AiFillThunderbolt size={18} />
                    <span>Pronta Entrega</span>
                    <i>
                        <FaExclamationCircle size={15} />
                        <span>Produto está disponivel em estoque</span>
                    </i>
                </StockBox>

                <BoxFlex style={{ justifyContent: "flex-start" }}>

                    <BoxPrice>
                        <PriceProduct>
                            {FormatCoin(Number(product?.price), "BRL")}
                        </PriceProduct>
                        <FullPrice >
                            <LabelOffer styles={{ backgroundColor: "var(--primary-color)", color: "white" }} >-20%</LabelOffer>
                            <OldPrice>
                                {FormatCoin(Number(product?.price), "BRL")}
                            </OldPrice>
                        </FullPrice>
                    </BoxPrice>

                    <div style={{ width: "180px" }}>
                        <Button>
                            Comprar
                        </Button>
                    </div>

                </BoxFlex>

            </BoxOptions>

            <HorizontalDash styles={{ width: "100%", margin: "10px" }} />
            <BoxFlex style={{justifyContent: "flex-start"}}>
                    <FavButton type="button">
                        <FaRegHeart/>
                        Adicionar aos favoritos
                    </FavButton>
            </BoxFlex>
        </Container>
    )
}