import { Categories, Images, Products, Reviews } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";
import { DateTime } from "next-auth/providers/kakao";

// export type ProductsProps = {
//     products?: Products[]; & {
//         images: Images[];
//         reviews: Reviews[];
//         category: {
//             name: string
//         }
//     }
// }


export type ProductProps = {
    product: Products & {
        images: Images[];
        reviews: Reviews[];
        category: {
            name: string
        }
    }
  }