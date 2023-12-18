import Profile from '../components/Profile';
import Login from '../components/Login';

export default function Account({ session }) {
    return (
        <>
            {
                session.state.nombre === "Inicio" && session.state.value ?
                    <Profile session={session} />
                : 
                    <Login session={session} />
            }


        </>
    );
}
