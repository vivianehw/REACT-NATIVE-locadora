import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';

import HomeStackRoutes from './homeStackRoutes'
import SearchStackRoutes from './searchStackRoutes'
import Search from '../pages/Search';
import Detalhes from '../pages/Detalhes';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitle: 'Locadora',

        headerTitleStyle: {
          color: '#c10307',
          fontFamily: 'sans-serif',
          fontSize: 23,
          fontWeight: '500'
        },

        headerStyle: {
          backgroundColor: '#0c0c0c',
        },

        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: '#c10307',
        tabBarInactiveTintColor: 'white',

        tabBarStyle: {
          backgroundColor: '#0c0c0c',
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStackRoutes}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Feather name='home' color={color} size={size} />
          }
        }}
      />

      <Tab.Screen
        name="SearchStack"
        component={SearchStackRoutes}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return <Feather name='search' color={color} size={size} />
          }
        }}
      />

    </Tab.Navigator>
  )
}
