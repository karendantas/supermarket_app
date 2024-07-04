import { View, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export function Header (){
    return (
        <View className='bg-green-y h-32 px-4 w-full items-center justify-between flex-row'>
            <View>
                <Text className='text-xl text-amber-800'> Boas Vindas ao, </Text>
                <Text className='font-bold text-2xl text-orange-f'> Frutífeiras </Text>
            </View>

            <View>
                <View className="bg-amber-800 h-5 w-5 rounded-full items-center justify-center absolute z-20 right-0"> 
                    <Text className="text-white  text-[12px]">
                        1
                    </Text> 
                </View>
                <Ionicons name="cart" size={38} color="orange" />
            </View>
        </View>
    )
}