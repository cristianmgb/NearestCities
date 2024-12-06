import React from 'react';
import {FlatList, Text, TouchableOpacity} from 'react-native';
import {styles} from './CityList.styles';
import {CityListProps} from './CityList.interface';

export const CityList: React.FC<CityListProps> = ({cities, onSelect}) => {
  return (
    <FlatList
      data={cities}
      keyExtractor={(item, index) => item.name + index}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => (
        <TouchableOpacity
          onPress={() => onSelect(item)}
          style={styles.cityItem}>
          <Text style={styles.cityText}>{item.name}</Text>
        </TouchableOpacity>
      )}
    />
  );
};
