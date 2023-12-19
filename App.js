import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getHeaderTitle } from '@react-navigation/elements';
import { useSessionStore } from './src/services/sessions';
import Header from './src/components/Header';
import HomeScreen from './src/screens/HomeScreen';
import { useFavListStore } from './src/services/favList';
import FavScreen from './src/screens/FavScreen';
import Account from './src/screens/Account';
import { Icon } from '@rneui/themed';

const Tab = createBottomTabNavigator();

export default function App() {
  const session = useSessionStore(state => state.session); 
  const idsFavList = useFavListStore(state => state.idsFavList);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            return <Icon name={ 
              route.name === 'Home' ? 'home' 
              : route.name === 'Favs' ? 'heart'
              : 'gear' } type='font-awesome' color={
                focused && route.name === 'Home' ? 'blue' 
                : focused && route.name === 'Favs' ? 'red'
                : focused && route.name === 'Account' ? 'orange'
                : 'black'
              } />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'black',
          header: ({ route, options, navigation }) => {
            const title = getHeaderTitle(options, route.name);
          
            return <Header title={title} session={session} navigation={navigation} />;
          }
        })}
      >
        <Tab.Screen 
          name='Home' 
          children={()=> <HomeScreen session={session} />}
        />

        <Tab.Screen 
          name='Favs' 
          children={()=> <FavScreen session={session} idsFavList={idsFavList} />}
        />

        <Tab.Screen 
          name='Account' 
          children={()=> <Account session={session} />}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}
