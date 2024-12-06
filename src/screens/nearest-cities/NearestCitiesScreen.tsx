import React from 'react';
import {SafeAreaView} from 'react-native';
import {NearestCities} from '../../components/nearest-cities/NearestCities';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppNavigatorParams} from '../../navigation/AppNavigator.interface';
import {commonStyle} from '../../shared/styles/common';

type Props = NativeStackScreenProps<AppNavigatorParams, 'NearestCitiesScreen'>;
export const NearestCitiesScreen = ({route}: Props) => {
  const {nearestCities, city} = route.params;
  return (
    <SafeAreaView style={commonStyle.container}>
      <NearestCities cities={nearestCities} selectedCity={city} />
    </SafeAreaView>
  );
};
