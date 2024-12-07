import React from 'react';
import {Image, Text, View} from 'react-native';
import {NearestCitiesProps} from './NearestCities.interface';
import {styles} from './NearestCities.styles';
import {stringsValues} from './NearestCities.strings';
import {useAppSelector} from '../../shared/redux/hooks';
import {nearestCitiesSelector} from '../../shared/redux/features/nearestCities.selectors';
import LocationIcon from '../../assets/icons/location.svg';
import {Title} from '../title/Title';
import {Images} from '../../assets/images';

export const NearestCities: React.FC<NearestCitiesProps> = () => {
  const {cities, selectedCity} = useAppSelector(nearestCitiesSelector);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={Images.LOCATION_PERMISSION} style={styles.img} />
        <Title style={styles.title}>
          {stringsValues.title} {selectedCity.name}
        </Title>
      </View>
      {cities.map((city, index) => (
        <View key={city.name + index}>
          <View style={styles.section}>
            <LocationIcon />
            <Text style={styles.cityText}>
              {city.name},
              <Text style={styles.km}> {city.distance.toFixed(2)} km</Text>
            </Text>
          </View>
          <View style={styles.line} />
        </View>
      ))}
    </View>
  );
};
