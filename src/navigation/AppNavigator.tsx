import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CitySearchScreen} from '../screens/city-search/CitySearchScreen';
import {NearestCitiesScreen} from '../screens/nearest-cities/NearestCitiesScreen';
import {AppNavigatorParams} from './AppNavigator.interface';
import {RoutersScreens} from './routes';
import {HeaderNavigation} from '@/components/header-navigation/HeaderNavigation';

const Stack = createNativeStackNavigator<AppNavigatorParams>();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: HeaderNavigation,
      }}>
      <Stack.Screen
        name={RoutersScreens.CitySearchScreen}
        component={CitySearchScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={RoutersScreens.NearestCitiesScreen}
        component={NearestCitiesScreen}
        options={{
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
