import React, { useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { useFavListStore } from '../services/favList';

export default function FavScreen({ idsFavList }) {
    const loadFavList = useFavListStore(state => state.loadFavList);
    const width = 120;
    const height = 120;

    useEffect(() => {   
        loadFavList()
    }, []);

    return (
        <View style={styles.container}>
            {
                idsFavList.map(id => {
                    return (
                        <Image 
                            key={id}
                            source = {{ uri: `https://img.foxes.cool/scary/${id}.jpg?width=${width}&height=${height}` }}  
                            style = {{ width, height }} 
                        />
                    )
                })
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 4
    }
});