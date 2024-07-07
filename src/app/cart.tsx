import { ProductType } from "@/@types/product";
import { Button } from "@/components/button";
import { ProductCard } from "@/components/product-card";
import { useCartStore } from "@/stores/cart-store";
import { FormatCurrency } from "@/utils/functions/format-currency";
import { Link, useNavigation } from "expo-router";
import { View, Text, ScrollView, Alert } from "react-native";

export default function Cart (){
    const cartStore = useCartStore()
    const navigation =  useNavigation()

    const totalPrice = cartStore.productsInCart.reduce((total, product) => total + product.price, 0)

    function handleRemoveProduct (product: ProductType){
        Alert.alert("Remover", `Deseja remover o ${product.title}?`, [
            {
                text: "Cancelar",
            },
            {
                text: "Remover",
                onPress: () => cartStore.remove_from_cart(product.id)
            }
        ])
      
    }

    function handleSendOrder(){
        if (cartStore.productsInCart.length > 0){
            Alert.alert("Pedido", "Seu pedido foi realizado!")
            
            cartStore.clear_cart()
            navigation.goBack()

        }else{
            Alert.alert("Pedido", "Seu carrinho esta vazio, adicione itens!")
        }
    }
    return (
    
            <View className="flex-1 px-4">

                <ScrollView 
                    showsVerticalScrollIndicator = {false}
                    >
                    

                    <Text className="font-heading text-amber-900 text-2xl pt-8"> Seu carrinho</Text>

                    {
                        cartStore.productsInCart.length > 0 
                        ?
                            cartStore.productsInCart.map((product) => (
                                <ProductCard 
                                    key = {product.id} 
                                    data = {product }
                                    onPress = {() => handleRemoveProduct(product)}
                                />
                            ))

                        :   <View className="items-center justify-center mt-8">
                                <Text className="fonyt-body text-xs"> Parece que seu carrinho está vázio. </Text>
                            </View>
                    }
                </ScrollView>
                    <View className="flex-row items-center gap-3 py-3">
                        <Text className="text-2xl text-amber-900 font-heading"> Total: </Text>
                        <Text className="text-3xl text-orange-f font-heading"> {FormatCurrency(totalPrice)} </Text>
                    </View>
                    
                <View className="pb-4 items-center">

                    <Button 
                        title = "Finalizar pedido"
                        onPress={handleSendOrder}
                      
                        />
                    <Link href="/" className="text-center font-body text-lg text-amber-900 mt-3"> Voltar </Link>
                </View>

            </View>

    )
}