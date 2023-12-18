import { StyleSheet, View, Image, Text } from 'react-native';

const idsHomeList = [];

for (let i = 1; i <= 9; i++) {
    idsHomeList.push(i);
}

export default function HomeScreen() {
    const width = 120;
    const height = 120;
    
    return (
        <View style={styles.container}>
            {
                idsHomeList.map(id => {
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