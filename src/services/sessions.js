import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useSessionStore = create((set) => ({
  session: {
    'username': '',
    'session': false
  },
  login: (username) => set({
    session: {
      'username': username,
      'session': true
    }
  }),
  logout: () => set({
    session: {
      'username': '',
      'session': false
    }
  }),
}))

export const getSession = async (username, inputKey) => {
  try {
    const key = await AsyncStorage.getItem(username);

    if (key !== null) {
      if (inputKey === key) {
        return {
          message: 'Has iniciado sesión con éxito',
          session: useSessionStore(() => login(username))
        }
      } else {
        return {
          message: 'La contraseña es incorrecta',
          session: ''
        }
      }
    } else {
      return {
        message: 'Ese nombre de usuario no existe',
        session: ''
      }
    }
  } catch (e) {
    return {
      message: 'Error al iniciar la sesión del usuario: ' + e.message,
      session: ''
    }
  }
};

export const setSession = async (username, inputKey) => {
  try {
    const key = await AsyncStorage.getItem(username);

    if (key !== null) {
      return 'El usuario ya había sido registrado con anterioridad.';
    } else {
      await AsyncStorage.setItem(username, inputKey);
      return 'El usuario ha sido registrado con éxito.';
    }
  } catch (e) {
    return 'Error al registrar al usuario: ' + e.message;
  }
};

