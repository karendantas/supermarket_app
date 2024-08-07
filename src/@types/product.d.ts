import { FRUITS } from "@/utils/data/products"
import { ImageProps } from "react-native"

export type ProductType = (typeof FRUITS)[0]

export type ProductInCardType = ProductType & { 
    quantity: number
} 
