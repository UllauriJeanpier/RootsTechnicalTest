import {StyleSheet} from 'react-native';
import {COLORS} from '../../constans';

export const indexStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    backgroundColor: COLORS.secondary,
  },
  subContainer: {
    marginVertical: 20,
    padding: 10,
    borderColor: COLORS.primary,
    borderRadius: 20,
  },
  txtField: {
    color: COLORS.primary,
    fontWeight: '700',
  },
  txtValue: {
    color: COLORS.text,
    fontWeight: '300',
  },
});
