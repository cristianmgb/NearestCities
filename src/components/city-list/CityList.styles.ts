import {StyleSheet} from 'react-native';
import {colors} from '../../shared/styles/colors';
import {spacing} from '../../shared/styles/spacing';

export const styles = StyleSheet.create({
  cityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: spacing['s-4'],
    backgroundColor: colors.lineColor,
    borderRadius: spacing['s-2'],
    marginBottom: spacing['s-2'],
  },
  contentItem: {
    flexDirection: 'row',
    gap: spacing['s-2'],
  },
  cityText: {
    fontSize: 18,
    color: colors.fontColor,
  },
});
