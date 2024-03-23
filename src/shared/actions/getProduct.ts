"use server"
import { ProductProps } from "@/types";
import { db } from "../lib/prisma";
import Product from "../Pages/Product";

interface Props {
    params: {
        id: string
    }
}

export default async function getProduct ({params}: Props) {
    try{
       const response = await db.products.findUniqueOrThrow({
            where: {
                id: params.id
            },
            include: {
                images: true,
                reviews: true
            }
       });
       
       return response;
    } catch (error) {
        console.error(error);
    }

}