import {StyleSheet} from 'react-native';
import {COLORS} from '../../constans';

export const styles = StyleSheet.create({
  btn: {
    width: '100%',
    height: 50,
    marginVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: 40,
  },
  text: {
    color: COLORS.secondary,
  },
});
