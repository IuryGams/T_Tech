import { Decimal } from "@prisma/client/runtime/library";

export default function FormatCoin (valor: number | undefined | Decimal, currency: "BRL" | "US") {
    return Number(valor).toLocaleString("pt-br", {
        style: "currency",
        currency
    })

}