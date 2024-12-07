import React from 'react';
import {Text, TextStyle} from 'react-native';
import {styles} from './Title.styles';

export interface TitleProps {
  children: React.ReactNode;
  style?: TextStyle;
}
export const Title = ({children, style}: TitleProps) => {
  return <Text style={[styles.title, style]}>{children}</Text>;
};
