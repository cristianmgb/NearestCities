import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './CityList.styles';
import {CityListProps} from './CityList.interface';
import BuildIcon from '../../assets/icons/build.svg';
import RowRigthIcon from '../../assets/icons/row_rigth.svg';

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
          <View style={styles.contentItem}>
            <BuildIcon />
            <Text style={styles.cityText}>{item.name}</Text>
          </View>
          <RowRigthIcon />
        </TouchableOpacity>
      )}
    />
  );
};
