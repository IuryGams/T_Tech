

"use server"
import { db } from "../lib/prisma";

export default async function getCategoryProduct (id: string | undefined) {
    try{
        const response = await db.categories.findUniqueOrThrow({
            where: { id },
            include: {
                product: {
                    where: {

                    }
                }
            }
        });
        // console.log(response);
       return response;
    } catch (error) {
        console.error(error);
    }

}