import React from 'react';
import { useSessionStore } from '../services/sessions';
import Login from '../components/Login';

export default function App() {
    const session = useSessionStore(state => state.session); 
    console.log(session);

    return (
        <>
            <Login />
        </>
    );
}