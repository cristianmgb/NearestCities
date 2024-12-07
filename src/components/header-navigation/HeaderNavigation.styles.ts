import {StyleSheet} from 'react-native';
import {colors} from '../../shared/styles/colors';
import {spacing} from '@/shared/styles/spacing';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: spacing['s-4'],
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    height: 56,
  },
  headerContent: {
    display: 'flex',
    flexDirection: 'row',
  },
  contentLef: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '60%',
    gap: spacing['s-4'],
  },
  contentRight: {
    width: '40%',
  },
  leftIcon: {
    marginLeft: 12,
    marginRight: 12,
  },
  titleContent: {
    color: colors.titleColor,
    fontSize: 18,
    fontWeight: '600',
  },
  rightIcon: {
    marginRight: 16,
  },
  blur: {
    position: 'absolute',
    width: '100%',
    height: '130%',
    flex: 1,
  },
});
