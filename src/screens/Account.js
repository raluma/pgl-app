import Profile from '../components/Profile';
import Login from '../components/Login';
import Signup from '../components/Signup';

export default function Account({ session }) {
    return (
        <>
            {
                session.state.name === "Login" && session.state.value ?
                    <Profile session={session} />
                : session.state.name === "Signup" ?
                    <Signup session={session} />
                :
                    <Login session={session} />
            }
        </>
    );
}
