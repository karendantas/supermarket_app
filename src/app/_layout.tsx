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

export default function Layout (){
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
                <SafeAreaView>
                    <Header />
                    <Slot />
                </SafeAreaView>

                : 
                <Loading />
           }
        </>
    )
}