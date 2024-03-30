import { ReactNode } from "react";
import { BoxTitle, ContainerSection, StyledHeader } from "./styled";
import { CSSProperties } from "styled-components";



export default function FeaturedSession({ title, children, styles }: {
    title?: string;
    children: ReactNode;
    styles?: CSSProperties;
}) {

    return (
        <ContainerSection>
            <StyledHeader >
                <BoxTitle style={styles}>
                    <h2>{title}</h2>
                </BoxTitle>
            </StyledHeader>
            {children}
        </ContainerSection>
    )
} 