import { Button } from "@/components/button";
import { Header } from "@/components/header";
import { FRUITS } from "@/utils/data/products";
import { Link, Redirect, useLocalSearchParams } from "expo-router";
import { View, Image, Text } from "react-native";

export default function ProductDetail(){
    const {id} = useLocalSearchParams()
    console.log(id)

    const currentProduct = FRUITS.find((item) => item.id === id)
    
    if (!currentProduct){
        return <Redirect href="/"/>
    }
    return (
        <View className="flex-1">
            <Header cartQuantity={8}/>

            {   
                <View className="flex-1">

                    <Image source={currentProduct.image} className="h-auto w-full" />
                    <View className="px-4 flex-1 mt-8">
                        <Text className="font-heading text-2xl text-bold text-amber-900"> {currentProduct.title} </Text>
                        <Text className="font-body text-lg text-justify " > {currentProduct.description }</Text>

                        <Text className="font-heading text-2xl text-orange-f" > {currentProduct.price} </Text>

                    </View>
                    
                    <View className="px-4 pb-4">
                        <Button title="Adicionar ao carrinho" />
                        <Link href="/" className="text-center font-body text-lg text-amber-900 mt-3"> Voltar </Link>
                    </View>
                </View>
            }
        </View>
    )
}