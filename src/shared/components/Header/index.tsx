import Link from "next/link";
import SearchInput from "../SearchInput";
import { BoxIcon, BoxItem, ContainerHeader, LinkPrimaryOption, LinkSecondaryOption, Title, TopHeader } from "./styled";
import { BsBox2 } from "react-icons/bs";
import { IoCartOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";


export default function Header() {
    return (
        <ContainerHeader>
            <TopHeader>
                
                <Title>
                    <Link href="/">Titulo</Link>
                </Title>
                <div style={{height: "100%", width: "100%", padding: "0 1em", borderLeft: "1px solid rgb(244, 244, 246)"}}>
                    <SearchInput />
                </div>
                <BoxItem>
                    <LinkPrimaryOption href="">
                        <BoxIcon>
                            <BsBox2 size={25} />
                        </BoxIcon>
                        <b>Meus Pedidos</b>

                    </LinkPrimaryOption>
                </BoxItem>
                <BoxItem>
                    <LinkSecondaryOption href="auth/login">
                        <BoxIcon>
                            <CiUser size={30} />
                        </BoxIcon>
                        <b>Minha conta</b>
                        <span>Login</span>
                    </LinkSecondaryOption>
                </BoxItem>
                <BoxItem>
                    <LinkSecondaryOption href="">
                        <BoxIcon>
                            <IoCartOutline size={30} />
                        </BoxIcon>
                        <b>Carrinho</b>
                        <span>{`R$ 0,00`}</span>
                    </LinkSecondaryOption>
                </BoxItem>

            </TopHeader>
            <menu>

            </menu>
        </ContainerHeader>
    )
} 