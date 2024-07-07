import { Text, View, FlatList } from 'react-native';

import { FRUITS } from '@/utils/data/products';

import { Header } from '@/components/header';
import { ProductCard } from '@/components/product-card';

export default function Home(){

    return (
        <View className='flex-1'>
            <Header cartQuantity={4}/>

            <View className='px-4'>

                <Text className='text-2xl font-heading mt-10 text-amber-900'> Frutas </Text>
              
                <FlatList 
                    data = {FRUITS}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => (
                        <ProductCard 
                            key = {item.id}
                            data = {item} 
                        />
                    )}
                    contentContainerStyle = {{paddingBottom:200}}
                    showsVerticalScrollIndicator = {false}
                />
               
            </View>
            
            
      
        </View>
    )
}