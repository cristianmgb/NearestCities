import {StyleSheet} from 'react-native';
import {spacing} from '../../shared/styles/spacing';
import {colors} from '../../shared/styles/colors';

export const styles = StyleSheet.create({
  container: {
    gap: spacing['s-4'],
    padding: spacing['s-4'],
    backgroundColor: colors.white,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing['s-3'],
    marginBottom: spacing['s-2'],
  },
  img: {
    width: 250,
    resizeMode: 'contain',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing['s-2'],
    paddingVertical: spacing['s-1'],
  },
  title: {
    fontSize: 20,
    fontWeight: '900',
    color: colors.titleColor,
    textAlign: 'center',
  },
  cityText: {
    fontSize: 18,
    color: colors.fontColor,
  },
  line: {
    backgroundColor: colors.lineColor,
    height: 1,
    width: 345,
  },
  km: {
    color: colors.fontColor,
    fontWeight: '500',
  },
});
