import {StyleSheet} from 'react-native';
import {spacing} from '../../shared/styles/spacing';
import {colors} from '@/shared/styles/colors';

export const styles = StyleSheet.create({
  input: {
    height: spacing['s-10'],
    borderColor: colors.borderColor,
    borderWidth: 1,
    borderRadius: spacing['s-2'],
    paddingHorizontal: spacing['s-2'],
    marginBottom: spacing['s-4'],
  },
});
