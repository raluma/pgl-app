import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Header({ title, session }) {
    const { state, username } = session;

    return (
        <View style={styles.headerStyle}>
            <Text style={styles.textStyle}>{title}</Text>
            { 
                state.nombre === 'Inicio' && state.value ?
                    <Text style={styles.textStyle}>{username}</Text>
                : 
                <></>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    headerStyle: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'left',
        justifyContent: 'space-between',
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 39,
        height: 80,
        backgroundColor: 'white'
    },
    textStyle: {
        fontSize: 20,
        fontWeight: '500'
    }
});

