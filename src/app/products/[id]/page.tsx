import Product from "@/shared/Pages/Product"
import { ContainerProduct } from "@/shared/Pages/Product/styled";
import getProduct from "@/shared/actions/getProduct";
import { ProductProps } from "@/types";

interface Props {
    params: {
        id: string
    }
}

export default async function ProductPage ({params}: Props) {
    const data = await getProduct({params});

    return (
        <ContainerProduct>
            <Product product={data} colorOption />
        </ContainerProduct>
    )
}
