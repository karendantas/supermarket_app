import { Text, Pressable, PressableProps } from "react-native"
import { clsx } from "clsx"

type CategoryButtonProps = PressableProps & {
    title: string,
    isSelected?: boolean
}
export function CategoryButton ({title, isSelected, ...rest}:CategoryButtonProps){
    return (
        <Pressable className={ clsx("bg-slate-200 border-2 border-green-y px-3 items-center justify-center",
            isSelected && "bg-green-y"
        )}>
            <Text className="font-regular text-xs text-slate-900"> {title} </Text>
        </Pressable>
    )
}