import { Text, View, FlatList } from 'react-native';

import { FRUITS } from '@/utils/data/products';

import { ProductCard } from '@/components/product-card';
import { Link } from 'expo-router';

export default function Home(){

    return (

            <View className='px-4 '>
                <Text className='text-2xl font-heading mt-10 text-amber-900'> Frutas </Text>
                <FlatList 
                    data = {FRUITS}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => (
                        <Link href={`/product/${item.id}`} asChild>
                            <ProductCard 
                                key = {item.id}
                                data = {item} 
                            />
                        </Link>
                    )}
                    contentContainerStyle = {{paddingBottom:200}}
                    showsVerticalScrollIndicator = {false}
                />
               
            </View>
            
            
      
    )
}