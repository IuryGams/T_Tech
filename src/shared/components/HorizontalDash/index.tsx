
"use client";
import styled, { CSSProperties } from "styled-components";

const StyledDash = styled.div`
    width: 12.5%;
    height: 2px;
    background-color: var(--secondary-color);
    border-radius: 8px;
`

export default function HorizontalDash({styles}: {
    styles?: CSSProperties;
}) {

    return <StyledDash style={styles} />
}

 HorizontalDash;