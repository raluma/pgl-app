import Profile from '../components/Profile';
import Login from '../components/Login';
import Signup from '../components/Signup';
import { Alert } from 'react-native';
import { useSessionStore } from '../services/sessions';

export default function Account({ session }) {
    const setNameState = useSessionStore(state => state.setNameState);
    const resetState = useSessionStore(state => state.resetState);

    setTimeout(() => {
        if (session.state.name === "Login" && session.state.value === false) {
            Alert.alert('', session.state.message);
            resetState();
        }

        if (session.state.name === "Logout") {
            Alert.alert('', session.state.message);
            setNameState("Login");
            resetState();
        }
        
        if (session.state.name === "Signup" && session.state.value !== null) {
            Alert.alert('', session.state.message);  
            setNameState("Login");
            resetState();
        }
    }, 1000);

    return (
        <>
            {
                session.state.name === "Login" && session.state.value ?
                    <Profile session={session} />
                : session.state.name === "Signup" ?
                    <Signup />
                :
                    <Login />
            }
        </>
    );
}
