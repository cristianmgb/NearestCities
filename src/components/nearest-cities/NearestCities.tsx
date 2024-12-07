import React from 'react';
import {Text, View} from 'react-native';
import {NearestCitiesProps} from './NearestCities.interface';
import {styles} from './NearestCities.styles';
import {stringsValues} from './NearestCities.strings';
import {useAppSelector} from '../../shared/redux/hooks';
import {nearestCitiesSelector} from '../../shared/redux/features/nearestCities.selectors';

export const NearestCities: React.FC<NearestCitiesProps> = () => {
  const {cities, selectedCity} = useAppSelector(nearestCitiesSelector);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {stringsValues.title} {selectedCity.name} :
      </Text>
      {cities.map((city, index) => (
        <Text key={city.name + index} style={styles.cityText}>
          {city.name} - {city.distance.toFixed(2)} km
        </Text>
      ))}
    </View>
  );
};
