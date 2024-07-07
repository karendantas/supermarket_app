import { ProductInCardType, ProductType } from "@/@types/product"

import * as cartInMemory from "@/stores/helpers/cart-in-memory"
import AsyncStorage from "@react-native-async-storage/async-storage"

import { create} from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"


type cartStoreType = {
    productsInCart: ProductInCardType[],
    add_to_cart: (newProduct: ProductType) => void,
    remove_from_cart: (productId: string) => void,
    clear_cart: () => void,
}
export const useCartStore = create(
    persist<cartStoreType>((set) => ({
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
    
    }), {
        name: "trilha-mobile-1",
        storage: createJSONStorage(() => AsyncStorage)
    }))