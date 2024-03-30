import { ReactNode } from "react";
import { Container, Content } from "./styled";


export default function ArticleBox({children, title} : {
    children: ReactNode;
    title: string;
}) {
    return(
        <Container>
            <h2>{title}</h2>
            <Content>
                {children}
            </Content>
        </Container>
    )
}