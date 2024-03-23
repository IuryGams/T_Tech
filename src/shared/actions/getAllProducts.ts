"use server"
import { db } from "../lib/prisma";

export default async function getAllProducts () {

    try{
        const response = await db.products.findMany({
            include: {
                images: true,
                category: {
                    select: {
                        name: true
                    }
                },
                reviews: true
            }
        });
        return response
    } catch (error) {
        console.error(error);
    }

}