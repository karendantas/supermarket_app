import { Header } from "@/components/header";
import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";

export default function ProductDetail(){
    const id = useLocalSearchParams()
    console.log(id)
    return (
        <View>
            <Header  cartQuantity={8}/>
        </View>
    )
}