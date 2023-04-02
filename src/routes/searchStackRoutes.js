import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Feather from 'react-native-vector-icons/Feather';

import Search from '../pages/Search';
import Detalhes from '../pages/Detalhes';

const Stack = createNativeStackNavigator();

export default function SearchStackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
        <Stack.Screen
            name='Search'
            component={Search}
        />

        <Stack.Screen
            name='Detalhes'
            component={Detalhes}
        />
    </Stack.Navigator>
  )
}
