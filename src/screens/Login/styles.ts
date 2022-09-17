import {StyleSheet} from 'react-native';
import {COLORS} from '../../constans';

export const indexStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
  },
  card: {
    elevation: 3,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  headerCard: {
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  title: {
    marginBottom: 20,
    color: COLORS.primary,
    fontSize: 28,
    fontWeight: '700',
  },
  form: {
    marginTop: 2,
  },
  buttonContainer: {},
});
