import { StyleSheet, View, Text } from 'react-native';
import { Avatar, Button } from 'react-native-paper';
import { useSessionStore } from '../services/sessions';

export default function Header({ title, session, navigation }) {
    const { state, username } = session;
    const shortUsername = username.substring(0, 2);
    const logout = useSessionStore(state => state.logout)

    const onPressLogin = () => {
        navigation.navigate('Account');
    }

    const onPressLogout = () => {
        logout();
    }

    return (
        <View style={styles.headerStyle}>
            <Text style={styles.textStyle}>{title}</Text>
            { 
                state.nombre === 'Inicio' && state.value && title === 'Account' ?
                    <View style={styles.profileContainer}>
                        <Button icon="logout" mode="contained-tonal" 
                            labelStyle={{ fontSize: 16 }}
                            style={styles.buttonStyle}
                            onPress={onPressLogout}>
                            Logout
                        </Button>
                    </View>

                : state.nombre === 'Inicio' && state.value ?
                    <View style={styles.profileContainer}>
                        <Avatar.Text size={40} label={shortUsername} />
                    </View>
                : title !== 'Account' ?
                    <Button icon="login" mode="contained-tonal" 
                        labelStyle={{ fontSize: 16 }}
                        style={styles.buttonStyle}
                        onPress={onPressLogin}>
                        Login
                    </Button>
                : <></>
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
        paddingTop: 30,
        height: 80,
        backgroundColor: 'white'
    },
    profileContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'left',
        gap: 10
    },
    textStyle: {
        fontSize: 20,
        fontWeight: '500',
        paddingTop: 6
    },
    buttonStyle: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 40
    }
});

