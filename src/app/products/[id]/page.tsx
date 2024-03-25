import Product from "@/shared/Pages/Product"
import getProduct from "@/shared/actions/getProduct";
interface Props {
    params: {
        id: string
    }
}

export default async function ProductPage ({params}: Props) {
    const data = await getProduct({params});

    return <Product product={data} />
}
