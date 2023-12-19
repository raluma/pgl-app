import React, { useEffect } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { useFavListStore } from '../services/favList';

export default function FavScreen({ session, idsFavList }) {
    const loadFavList = useFavListStore(state => state.loadFavList);
    const width = 120;
    const height = 120;

    useEffect(() => {   
        loadFavList()
    }, []);

    return (
        <>
            {   
                session.state.name === "Login" && session.state.value === true ?
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
                :
                <Text style={styles.advice}>You must be logged</Text>
            }
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 4
    },
    advice: {
        marginTop: 8, 
        marginLeft: 8
    }
});