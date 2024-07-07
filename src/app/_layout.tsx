import {Slot} from 'expo-router';
import { SafeAreaView } from 'react-native';

import {
    useFonts,
    Inter_500Medium,
    Inter_400Regular,
    Inter_600SemiBold,
    
} from "@expo-google-fonts/inter"

import { Header } from '@/components/header';
import { Loading } from "@/components/loading"
import { useCartStore } from '@/stores/cart-store';

export default function Layout (){
    const cartStore = useCartStore()
    
    const cartQuantity = cartStore.productsInCart.reduce((total, product) => total + product.quantity, 0 )
    
    const [fontsLoaded] = useFonts({
        Inter_500Medium,
        Inter_400Regular,
        Inter_600SemiBold
    })
    return (
        
        <>
           {
            fontsLoaded 
                ?
                <SafeAreaView className='flex-1'>
                    <Header cartQuantity={cartQuantity}/>
                    <Slot />
                </SafeAreaView>
                : 
                <Loading />
           }
        </>
    )
}