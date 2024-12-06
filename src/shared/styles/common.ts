import {StyleSheet} from 'react-native';
import {spacing} from './spacing';
import {colors} from './colors';

export const commonStyle = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: spacing['s-4'],
    backgroundColor: colors.backgroud,
  },
});
