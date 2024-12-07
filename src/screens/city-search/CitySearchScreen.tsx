import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {colors} from '@/shared/styles/colors';
import {AppNavigatorParams} from '@/navigation/AppNavigator.interface';
import {useCitySearch} from '@/hooks/useCitySearch';
import {commonStyle} from '@/shared/styles/common';
import {styles} from './CitySearchScreen.styles';
import {City} from '@/components/city-list/CityList.interface';
import {CityList, SearchInput, Title} from '@/components';

type Props = NativeStackScreenProps<AppNavigatorParams, 'CitySearchScreen'>;

export const CitySearchScreen = ({navigation}: Props) => {
  const {query, setQuery, filteredCities, findNearestCities} = useCitySearch();

  const handleSelectCity = (city: City) => {
    findNearestCities(city);
    navigation.navigate('NearestCitiesScreen');
  };

  return (
    <SafeAreaView style={commonStyle.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.white}
        animated
      />
      <View style={styles.content}>
        <Title style={styles.title}>Nearest Cities</Title>
        <View>
          <SearchInput query={query} onChange={setQuery} />
          <CityList cities={filteredCities} onSelect={handleSelectCity} />
        </View>
      </View>
    </SafeAreaView>
  );
};
