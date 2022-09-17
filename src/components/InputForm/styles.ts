import {StyleSheet} from 'react-native';
import {COLORS} from '../../constans';

export const indexStyles = StyleSheet.create({
  container: {},
  txtlabel: {
    color: COLORS.primary,
    fontSize: 15,
  },
  inputContainer: {
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 5,
    height: 50,
    borderWidth: 1.2,
    borderRadius: 15,
    borderColor: COLORS.primary,
  },
  inputWidth: {
    width: '90%',
    fontSize: 15,
  },
  errorMsg: {
    margin: 5,
    fontSize: 13,
    color: COLORS.error,
  },
});
