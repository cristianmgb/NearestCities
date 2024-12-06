import React from 'react';
import {Text, View} from 'react-native';
import {NearestCitiesProps} from './NearestCities.interface';
import {styles} from './NearestCities.styles';
import {stringsValues} from './NearestCities.strings';

export const NearestCities: React.FC<NearestCitiesProps> = ({cities}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{stringsValues.title}</Text>
      {cities.map((city, index) => (
        <Text key={city.name + index} style={styles.cityText}>
          {city.name} - {city.distance.toFixed(2)} km
        </Text>
      ))}
    </View>
  );
};