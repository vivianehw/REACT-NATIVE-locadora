import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Feather from 'react-native-vector-icons/Feather';

import Home from '../pages/Home';
import Detalhes from '../pages/Detalhes';

const Stack = createNativeStackNavigator();

export default function HomeStackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
        <Stack.Screen
            name='Home'
            component={Home}
        />

        <Stack.Screen
            name='Details'
            component={Details}
        />
    </Stack.Navigator>
  )
}
