import {StyleSheet} from 'react-native';
import {spacing} from '../../shared/styles/spacing';

export const styles = StyleSheet.create({
  container: {
    marginTop: spacing['s-4'],
    padding: spacing['s-3'],
    backgroundColor: '#e8e8e8',
    borderRadius: spacing['s-2'],
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: spacing['s-2'],
  },
  cityText: {
    fontSize: 16,
  },
});
