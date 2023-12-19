import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useSessionStore = create((set) => {
  return {
    session: {
      state: {
        'name': 'Login',
        'value': null,
        'message': null
      },
      'username': '',
      'password': ''
    },
    signup: async (username, password) => {
      try {
        const key = await AsyncStorage.getItem(username);
    
        if (key !== null) {
          set({ 
            session: {
              state: {
                'name': 'Signup',
                'value': false,
                'message': 'The user has been previously registered.'
              },
              'username': '',
              'password': ''
            } 
          });
        } else {
          await AsyncStorage.setItem(username, password);
          set({ 
            session: {
              state: {
                'name': 'Signup',
                'value': true,
                'message': 'The user has been sucessfully registered.'
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
    login: async (username, password) => {
      try {
        const key = await AsyncStorage.getItem(username);
    
        if (key !== null) {
          if (key === password) {
            set({ 
              session: {
                state: {
                  'name': 'Login',
                  'value': true,
                  'message': 'You are successfully logged in.'
                },
                'username': username,
                'password': password
              } 
            });
          } else {
            set({ 
              session: {
                state: {
                  'name': 'Login',
                  'value': false,
                  'message': 'The password is inconrrect.'
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
                'name': 'Login',
                'value': false,
                'message': 'Username does not exist.'
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
            'name': 'Logout',
            'value': true,
            'message': 'You have successfully logged out.'
          },
          'username': '',
          'password': ''
        } 
      });
    },
    setNameState: (name) => {
      set({ 
        session: {
          state: {
            'name': name,
            'value': null,
            'message': null
          },
          'username': '',
          'password': ''
        } 
      });
    },
    resetState: () => {
      set({ 
        session: {
          state: {
            'name': 'Login',
            'value': null,
            'message': null
          },
          'username': '',
          'password': ''
        }
      });
    },
    setPassword: async (username, password) => {
      await AsyncStorage.setItem(username, password);
      set({ 
        session: {
          state: {
            'name': 'Login',
            'value': true,
            'message': 'Successful update'
          },
          'username': username,
          'password': password
        } 
      });
    }
  }
})






