import {StyleSheet} from 'react-native';
import {primaryColor} from '../../constants';

export const profileStyles = StyleSheet.create({
  logOutButton: {
    position: 'absolute',
    bottom: 10,
    left: 10,
  },
  editButton: {
    borderWidth: 2,
    borderColor: primaryColor,
    borderRadius: 10,
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 10,
  },
});
