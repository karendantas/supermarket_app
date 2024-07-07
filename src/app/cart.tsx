import { Header } from "@/components/header";
import { View, Text } from "react-native";

export default function Cart (){
    return (
        <View className="flex-1">
            <Header cartQuantity={8}/>

            <View className="flex-1 px-4">
                <Text className="font-heading text-amber-900 text-2xl pt-8"> Seu carrinho</Text>

                <View className="items-center justify-center flex-1">
                    <Text className="fonyt-body text-xs"> Parece que seu carrinho está vázio. </Text>
                </View>
                
            </View>
        </View>
    )
}