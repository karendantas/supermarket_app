import { View, Text } from "react-native";
import { Feather } from '@expo/vector-icons';
import { Link } from "expo-router";

type HeaderProps = {
    cartQuantity: number
}
export function Header ({cartQuantity}:HeaderProps){
    return (
        <View className='bg-green-y h-32 px-4 w-full items-center justify-between flex-row'>
            <View>
                <Text className='text-xl text-amber-800'> Boas Vindas ao, </Text>
                <Text className='font-bold text-2xl text-orange-f'> Frutífeiras </Text>
            </View>

            <Link href = "/cart">
                <View className="relative">
                    {
                        cartQuantity > 0 && (
                        <View className="bg-amber-800 h-5 w-5 rounded-full items-center justify-center absolute z-20 -right-1.5 -top-2"> 
                            <Text className="text-white  text-[12px]"> {cartQuantity} </Text>
                        </View>
                        )
                    }
                    <Feather name = "shopping-bag" size = {30} color="orange"/>
                </View>
            </Link>
        </View>
    )
}