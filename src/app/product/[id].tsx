
import { useCartStore } from "@/stores/cart-store";
import { FRUITS } from "@/utils/data/products";
import { Link, Redirect, useLocalSearchParams, useNavigation } from "expo-router";
import { View, Image, Text } from "react-native";

import { Button } from "@/components/button";
import { FormatCurrency } from "@/utils/functions/format-currency";

export default function ProductDetail(){
    const cartStore = useCartStore()
    const navigation = useNavigation()

    const {id} = useLocalSearchParams()
    const currentProduct = FRUITS.find((item) => item.id === id)
    
    
    function handleAddToCart(){
        cartStore.add_to_cart(currentProduct!)
        navigation.goBack()
        
    }
    
    if (!currentProduct){
        return <Redirect href="/"/>
    }
    
    return (
        <View className="flex-1">
           {   
                <View className="flex-1">

                    <Image source={currentProduct.image} className="h-auto w-full" />
                    <View className="px-4 flex-1 mt-8">
                        <Text className="font-heading text-2xl text-bold text-amber-900">{currentProduct.title}</Text>
                        <Text className="font-body text-lg text-justify " >{currentProduct.description}</Text>

                        <Text className="font-heading text-2xl text-orange-f" >{FormatCurrency(currentProduct.price)}</Text>

                    </View>
                    
                    <View className="px-4 pb-4">
                        <Button
                            onPress={handleAddToCart} 
                            title="Adicionar ao carrinho" />
                        <Link href="/" className="text-center font-body text-lg text-amber-900 mt-3"> Voltar </Link>
                    </View>
                </View>
            }
        </View>
    )
}