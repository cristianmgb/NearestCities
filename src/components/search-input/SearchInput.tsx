import React from 'react';
import {TextInput} from 'react-native';
import {styles} from './SearchInput.styles';
import {stringsValues} from './SearchInput.strings';
import {SearchInputProps} from './SearchInput.interface';

export const SearchInput: React.FC<SearchInputProps> = ({query, onChange}) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={stringsValues.placeholder}
      value={query}
      onChangeText={onChange}
    />
  );
};
