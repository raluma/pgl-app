import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, TextInput, Button } from 'react-native-paper';

export default function Profile({ session }) {
    const { state, username, password } = session;
    const shortUsername = username.substring(0, 2);

    const [newPassword, setNewPassword] = useState(password);
    const [hidden, setHidden] = useState(true);

    const onEye = () => {
        setHidden(!hidden);
    }

    const onPressUpdate = () => {

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
                right={<TextInput.Icon icon="eye" onPress={onEye} />}
                mode="flat"
                value={password}
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
