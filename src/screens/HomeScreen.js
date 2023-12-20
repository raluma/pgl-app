import { StyleSheet, View } from 'react-native';
import FlipCard from 'react-native-flip-card'
import { Card } from 'react-native-paper';
import { Button, Icon } from '@rneui/themed';
import { useFavListStore } from '../services/favList';

const idsHomeList = [];

for (let i = 1; i <= 9; i++) {
    idsHomeList.push(i);
}

export default function HomeScreen({ session, idsFavList }) {
    const { username } = session;
    const addFav = useFavListStore(state => state.addFav);
    const dropFav = useFavListStore(state => state.dropFav);
    const width = 120;
    const height = 120;

    const onToggle = (id) => {
        if (idsFavList.includes(id)) {
            dropFav(username, id);
        } else {
            addFav(username, id);
        }
    }
    
    return (
        <View style={styles.container}>
            {
                idsHomeList.map(id => {
                    return (    
                        <View key={id} style={styles.article}>
                            {   
                                session.state.name === "Login" && session.state.value === true ?
                                    <FlipCard 
                                        friction={6}
                                        perspective={1000}
                                        flipHorizontal={false}
                                        flipVertical={true}
                                        flip={false}
                                        clickable={true}
                                    >
                                        <View style={styles.face}>
                                            <Card style={styles.card}>
                                                <Card.Cover source={{ uri: `https://img.foxes.cool/scary/${id}.jpg?width=${width}&height=${height}` }} />
                                            </Card>

                                            <Icon 
                                                name="retweet" 
                                                type="font-awesome" 
                                                color="black"
                                                size={20}
                                            /> 
                                        </View>

                                        <View style={styles.back}>
                                            <Button
                                                buttonStyle={styles.button}
                                                onPress={() => onToggle(id)}
                                            >
                                                <Icon 
                                                    name="heart" 
                                                    type="font-awesome" 
                                                    color={ idsFavList.includes(id) ? 'red' : 'black' }
                                                    size={60}
                                                /> 
                                            </Button>
                                        </View>
                                    </FlipCard>
                                : 
                                <>
                                    <Card style={styles.card}>
                                            <Card.Cover source={{ uri: `https://img.foxes.cool/scary/${id}.jpg?width=${width}&height=${height}` }} />
                                    </Card>
                                </>
                            }
                        </View>
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
        alignItems: 'center',
        columnGap: 10,
        rowGap: 16,
        marginTop: 14
    },
    article: {
        width: 120,
        height: 200,
    },
    face: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: 120,
        height: 200,
    }, 
    card: {
        width: 120,
    },
    back: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 20,
        width: 120,
        height: 200
    },
    button: {
        backgroundColor: 'none',
        width: 80,
        height: 72
    }
});