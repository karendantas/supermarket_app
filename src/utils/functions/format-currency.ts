
export function FormatCurrency(price: number){
    return price.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })
}