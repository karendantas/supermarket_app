import { ProductType } from "@/@types/product";
import { Image, View } from "react-native";

type ProductCartProps = {
    data: ProductType

}
export function ProductCard ({data}:ProductCartProps){
    return (
        <View className="w-full h-32">
            <Image/>
            
        </View>
    )
}