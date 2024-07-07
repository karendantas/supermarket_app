import { FRUITS } from "@/utils/data/products"
import { ImageProps } from "react-native"

export type ProductType = {
    id: string,
    title: string,
    description: string,
    price: number,
    image: ImageProps,
    quantity?: number
}

    