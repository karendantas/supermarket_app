import { ProductType } from "@/@types/product";
import { Image, Text, View } from "react-native";

type ProductCartProps = {
    data: ProductType

}
export function ProductCard ({data}:ProductCartProps){
   
    return (
        <View className="w-full h-32 flex-row items-center  ">
            <Image source={data.image} className="h-28 w-28 rounded-md"/>

            <View className="items-start px-5 flex-1 justify-start">
                <Text className="font-heading text-xl leading-6 "> {data.title} </Text>
                <Text className="font-body text-xs text-justify" > {data.description} </Text>
                <Text className="text-orange-f font-body text-lg"> {data.price}</Text>
            </View>
            
        </View>
    )
}