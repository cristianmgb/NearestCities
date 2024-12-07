import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {SearchInput} from '../../components/search-input/SearchInput';
import {CityList} from '../../components/city-list/CityList';
import {useCitySearch} from '../../hooks/useCitySearch';
import {City} from '../../components/city-list/CityList.interface';
import {AppNavigatorParams} from '../../navigation/AppNavigator.interface';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {commonStyle} from '../../shared/styles/common';
import {Title} from '../../components/title/Title';
import {styles} from './CitySearchScreen.styles';

type Props = NativeStackScreenProps<AppNavigatorParams, 'CitySearchScreen'>;

export const CitySearchScreen = ({navigation}: Props) => {
  const {query, setQuery, filteredCities, findNearestCities} = useCitySearch();

  const handleSelectCity = (city: City) => {
    findNearestCities(city);
    navigation.navigate('NearestCitiesScreen');
  };

  return (
    <SafeAreaView style={commonStyle.container}>
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
