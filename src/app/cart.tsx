import { ProductCard } from "@/components/product-card";
import { useCartStore } from "@/stores/cart-store";
import { View, Text } from "react-native";

export default function Cart (){
    const cartStore = useCartStore()

    return (
    
            <View className="flex-1 px-4">
                <Text className="font-heading text-amber-900 text-2xl pt-8"> Seu carrinho</Text>

                {
                    cartStore.productsInCart.length > 0 
                    ?
                        cartStore.productsInCart.map((product) => (
                            <ProductCard 
                                key = {product.id} 
                                data = {product }
                            />
                        ))

                    :   <View className="items-center justify-center flex-1">
                            <Text className="fonyt-body text-xs"> Parece que seu carrinho está vázio. </Text>
                        </View>
                }
               

            </View>

    )
}