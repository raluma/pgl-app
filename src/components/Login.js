import React from 'react';
import { useSessionStore } from '../services/sessions';
import { Button } from 'react-native';

export default function Login() {
    const login = useSessionStore(state => state.login); 

    const handleClick = () => {
        login('Raluma', 'prueba')
    }
    
    return (
        <>
            <Button onPress={handleClick} title='Login' />
        </>
    );
}