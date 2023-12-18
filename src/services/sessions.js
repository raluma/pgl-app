import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useSessionStore = create((set) => {
  return {
    session: {
      state: {
        'nombre': '',
        'value': false,
        'message': ''
      },
      'username': '',
      'password': ''
    },
    signup: async (username, inputKey) => {
      try {
        const key = await AsyncStorage.getItem(username);
    
        if (key !== null) {
          set({ 
            session: {
              state: {
                'nombre': 'Registro',
                'value': false,
                'message': 'El usuario ya había sido registrado con anterioridad.'
              },
              'username': '',
              'password': ''
            } 
          });
        } else {
          await AsyncStorage.setItem(username, inputKey);
          set({ 
            session: {
              state: {
                'nombre': 'Registro',
                'value': true,
                'message': 'El usuario ha sido registrado con éxito.'
              },
              'username': '',
              'password': ''
            } 
          });
        }
      } catch (e) {
        console.log(e);
      }
    },
    login: async (username, iPassword) => {
      try {
        const password = await AsyncStorage.getItem(username);
    
        if (password !== null) {
          if (password === iPassword) {
            set({ 
              session: {
                state: {
                  'nombre': 'Inicio',
                  'value': true,
                  'message': 'Has iniciado sesión con éxito'
                },
                'username': username,
                'password': iPassword
              } 
            });
          } else {
            set({ 
              session: {
                state: {
                  'nombre': 'Inicio',
                  'value': false,
                  'message': 'La contraseña es incorrecta'
                },
                'username': '',
                'password': ''
              } 
            });
          }
        } else {
          set({ 
            session: {
              state: {
                'nombre': 'Inicio',
                'value': false,
                'message': 'Ese nombre de usuario no existe'
              },
              'username': '',
              'password': ''
            } 
          });
        }
      } catch (e) {
        console.log(e);
      }
    },
    logout: () => {
      set({ 
        session: {
          state: {
            'nombre': 'Cierre',
            'value': true,
            'message': 'Has cerrado la sesión con éxito'
          },
          'username': '',
          'password': ''
        } 
      });
    }
  }
})






