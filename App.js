import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import FavScreen from './src/screens/FavScreen';
import { Icon } from '@rneui/themed';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            return <Icon name={ 
              route.name === 'Home' ? 'home' 
              : 'heart'} type='font-awesome' color={
                focused && route.name === 'Home' ? 'blue' 
                : focused && route.name === 'Fav' ? 'red'
                : 'black'
              } />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'black',
        })}
      >
        <Tab.Screen 
          name='Home' 
          children={()=> <HomeScreen />}
        />

        <Tab.Screen 
          name='Fav' 
          children={()=> <FavScreen />}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}
