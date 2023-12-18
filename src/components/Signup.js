import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useSessionStore } from '../services/sessions';

export default function Signup({ session }) {
    const signup = useSessionStore(state => state.signup)
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [hidden, setHidden] = useState(true);

    const onSignup = () => {
        signup(username, password);
    }

    const onEye = () => {
        setHidden(!hidden);
    }

    return (
        <View style={styles.container}>
        { session.state.nombre === "Registro" && !session.state.value ? 
            <Button 
            mode="elevated" 
            style={styles.errorButton}
            >
                {session.state.message}
            </Button>
            :
            <></>
        }
    
        <TextInput
            label="Username"
            value={username}
            onChangeText={username => setUsername(username)}
            style={styles.textInput}
        />

        <TextInput
            label="Password"
            secureTextEntry = {hidden}
            right={<TextInput.Icon icon="eye" onPress={onEye} />}
            value={password}
            onChangeText={password => setPassword(password)}
            style={styles.textInput}
        />

        <Button 
            mode="elevated" 
            onPress={onSignup}
            style = {styles.button}
            >
            Login
        </Button>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      gap: 26
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
