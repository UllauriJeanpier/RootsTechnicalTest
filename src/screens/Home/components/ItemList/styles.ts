import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../../../constans';

const {width: GlobalWidth, height: GlobalHeight} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.default,
    marginBottom: 15,
    borderRadius: 15,
    flexDirection: 'row',
    width: '100%',
    height: GlobalHeight * 0.2,
  },
  imgContainer: {
    flex: 0.8,
    borderRadius: 15,
    width: '100%',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    marginHorizontal: '5%',
    paddingVertical: '10%',
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  infoName: {
    color: COLORS.primary,
    fontWeight: '700',
  },
  infoSymbol: {
    color: COLORS.text,
    fontWeight: '500',
  },
  infoDescription: {
    color: COLORS.text,
    fontWeight: '300',
  },
});
