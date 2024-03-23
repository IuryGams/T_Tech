import { BoxIcon, ContainerInputSearch, StyledInput } from "./styled";
import { SlMagnifier } from "react-icons/sl";


export default function SearchInput () {
    return(
        <ContainerInputSearch>
            <StyledInput type="search" placeholder="O que está buscando ?" />
            <BoxIcon>
                <SlMagnifier size={20} />
            </BoxIcon>
        </ContainerInputSearch>
    )
}