import { Pressable, PressableProps, Text } from "react-native";

type ButtonProps =  PressableProps & {
    title: string
}
export function Button ({title}:ButtonProps){
    return (
        <Pressable className="w-full h-14 bg-orange-f rounded-md items-center justify-center">
            <Text className="font-body text-lg text-amber-900"> {title} </Text>
        </Pressable>
    )
}