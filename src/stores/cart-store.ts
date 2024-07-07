import { ProductInCardType, ProductType } from "@/@types/product"
import * as cartInMemory from "@/stores/helpers/cart-in-memory"
import { create } from "zustand"

type cartStoreType = {
    productsInCart: ProductInCardType[],
    add_to_cart: (newProduct: ProductType) => void,
    remove_from_cart: (productId: string) => void,
    clear_cart: () => void,
}
export const cartStore = create<cartStoreType>((set) => ({
    productsInCart: [] ,
    add_to_cart: (newProduct: ProductType) => set((state) => ({
        productsInCart: cartInMemory.add(state.productsInCart, newProduct),
    })),
    remove_from_cart: (productId: string) => set((state) => ({
        productsInCart: cartInMemory.remove(state.productsInCart,productId)
    })),
    clear_cart: () => set(() => ({
        productsInCart: []
    }))
    
}))