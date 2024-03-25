import styled, { CSSProperties } from "styled-components"

const StyledLabel = styled.label`
    border: 2px solid var(--primary-color);
    padding: 2px 6px;
    font-size: 10px;
    border-radius: 4px;
    color: var(--primary-color);
    text-decoration: none;
`

export default function LabelOffer({children, styles}: {
    children: number | string;
    styles?: CSSProperties
} ) {
    return <StyledLabel style={styles}>
        {children}
    </StyledLabel>
}