import {Slot} from 'expo-router';
import { SafeAreaView } from 'react-native';

import {
    useFonts,
    Inter_700Bold,
    Inter_500Medium,
    Inter_400Regular,
    
} from "@expo-google-fonts/inter"

import { Header } from '@/components/header';
import { Loading } from "@/components/loading"

export default function Layout (){
    const [fontsLoaded] = useFonts({
        Inter_700Bold,
        Inter_500Medium,
        Inter_400Regular,
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