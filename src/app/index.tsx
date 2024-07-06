import { CategoryButton } from '@/components/category-button';
import { useState } from 'react';
import { FlatList, SafeAreaView, Text } from 'react-native';

export function Home(){
    const categories = ["Frutas", "Limpeza", "Alimentos"]
    const [categorySelected, setCategorySelected] = useState(categories[0])

    function changeSelectedCategory( categorySelected: string ){
        setCategorySelected(categorySelected)
    }
    return (
        <SafeAreaView>
            <FlatList 
                data = {categories}
                keyExtractor={(item) => item}
                renderItem={ ({item}) => (
                    <CategoryButton title = {item}/>
                )}
                horizontal
                showsHorizontalScrollIndicator = {false}
                className='pt-8 px-4'
                contentContainerStyle = {{gap: 12}}
            />
            
        </SafeAreaView>
    )
}