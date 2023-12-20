import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Card } from 'react-native-paper';
import { useFavListStore } from '../services/favList';

export default function FavScreen({ session, idsFavList }) {
    const { username } = session;
    const loadFavList = useFavListStore(state => state.loadFavList);
    const width = 120;
    const height = 120;

    useEffect(() => {   
        loadFavList(username)
    }, []);

    return (
        <>
            {   
                session.state.name === "Login" && session.state.value === true ?
                    <View style={styles.container}>
                        {
                            idsFavList.map(id => {
                                return (
                                    <View key={id} style={styles.article}>
                                        <Card style={styles.card}>
                                                <Card.Cover source={{ uri: `https://img.foxes.cool/scary/${id}.jpg?width=${width}&height=${height}` }} />
                                        </Card>
                                    </View>
                                )
                            })
                        }
                    </View> 
                :
                <Text style={styles.warning}>You must be logged</Text>
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
        alignItems: 'center',
        columnGap: 10,
        rowGap: 16,
        marginTop: 14
    },
    article: {
        width: 120,
        height: 200,
    },
    warning: {
        marginTop: 8, 
        marginLeft: 8
    }
});