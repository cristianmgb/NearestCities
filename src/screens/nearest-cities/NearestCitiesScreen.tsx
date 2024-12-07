import React from 'react';
import {SafeAreaView} from 'react-native';
import {NearestCities} from '@/components';
import {commonStyle} from '@/shared/styles/common';

export const NearestCitiesScreen = () => {
  return (
    <SafeAreaView style={commonStyle.container}>
      <NearestCities />
    </SafeAreaView>
  );
};
