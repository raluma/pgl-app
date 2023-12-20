import { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Avatar, TextInput, Button } from 'react-native-paper';
import { useSessionStore } from '../services/sessions';

export default function Profile({ session }) {
    const setPassword = useSessionStore(state => state.setPassword);
    const { username, password } = session;
    const shortUsername = username.substring(0, 2);

    const [newPassword, setNewPassword] = useState(password);
    const [hidden, setHidden] = useState(true);

    const onPressUpdate = () => {
        setPassword(username, newPassword);
        Alert.alert('', 'Successful update');
    }

    return (
        <View style={styles.container}>
            <Avatar.Text size={230} label={shortUsername} />
            
            <TextInput
                label="Username"
                mode="outlined"
                value={username}
                disabled={true}
                style={styles.textInput}
            />

            <TextInput
                label="Password"
                secureTextEntry = {hidden}
                right={<TextInput.Icon icon="eye" onPress={() => setHidden(!hidden)} />}
                mode="flat"
                value={newPassword}
                onChangeText={password => setNewPassword(password)}
                style={styles.textInput}
            />

            <Button 
                mode="elevated" 
                onPress={onPressUpdate}
                style = {styles.button}
                >
                Update
            </Button>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      gap: 40
    },
    textInput: {
      width: 260
    }, 
    button: {
      width: 160,
      borderRadius: 2
    },
    errorButton: {

    }
});
