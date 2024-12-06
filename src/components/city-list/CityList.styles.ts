import {StyleSheet} from 'react-native';
import {colors} from '../../shared/styles/colors';
import {spacing} from '../../shared/styles/spacing';

export const styles = StyleSheet.create({
  cityItem: {
    padding: spacing['s-3'],
    backgroundColor: colors.white,
    borderRadius: spacing['s-2'],
    marginBottom: spacing['s-2'],
  },
  cityText: {
    fontSize: spacing['s-4'],
  },
});
