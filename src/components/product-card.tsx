import { Image, View } from "react-native";

type ProductCartProps = {
    title: string,
    description: string,
    image: string,
    price: string,

}
export function ProductCard ({ title, description, price, image}:ProductCartProps){
    return (
        <View className="w-full h-32">
            <Image/>
            
        </View>
    )
}