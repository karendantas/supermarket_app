import {  ProductType } from "@/@types/product";
import { FormatCurrency } from "@/utils/functions/format-currency";
import { forwardRef } from "react";
import { Image, Pressable, PressableProps, Text, View } from "react-native";

type ProductCartType = ProductType & {
    quantity?: number
}
type ProductCartProps = PressableProps & {
    data: ProductCartType

}
export const ProductCard = forwardRef<PressableProps,ProductCartProps>(({data, ...rest}, ref) => {
   
    return (
        <Pressable className="w-full h-32 flex-row items-center" {...rest} ref = {ref}>
            <Image source={data.image} className="h-28 w-28 rounded-md"/>

            <View className="items-start px-5 flex-1 justify-start">
             
                <Text className="font-heading text-xl leading-6 ">{data.title}</Text>
                {data.quantity && <Text className="text-body font-xs"> x {data.quantity}</Text> }
                    
                <Text className="font-body text-xs text-justify">{data.description}</Text>
                <Text className="text-orange-f font-body text-lg">{FormatCurrency(data.price)}</Text>
            </View>
            
        </Pressable>
    )
})