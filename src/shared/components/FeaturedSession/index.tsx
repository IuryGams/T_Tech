import { ReactNode } from "react";
import Card from "../ProductCard";
import { BoxTitle, ContainerSection, StyledHeader } from "./styled";
import { IconType } from "react-icons";



export default function FeaturedSession({ title, children }: {
    title?: string;
    children: ReactNode;
}) {

    return (
        <ContainerSection>
            <StyledHeader>
                <BoxTitle>
                    <h2>{title}</h2>
                </BoxTitle>
            </StyledHeader>
            {children}
        </ContainerSection>
    )
} 