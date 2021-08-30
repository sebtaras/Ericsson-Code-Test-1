import {StyleSheet} from 'react-native';
import {placeholderColor, primaryColor} from '../../constants';

const sharedStyles = StyleSheet.create({
  debugBorder: {
    borderWidth: 1,
  },
  flexContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderRadius: 10,
    paddingVertical: 12.5,
    paddingHorizontal: 25,
  },
  textInput: {
    borderBottomWidth: 2,
    width: 200,
    borderBottomColor: placeholderColor,
    margin: 10,
    padding: 2,
  },
  primaryButton: {
    backgroundColor: primaryColor,
  },
  whiteText: {
    color: 'white',
  },
  blackText: {
    color: 'black',
  },
  errorText: {
    color: 'red',
  },
  mediumText: {
    fontSize: 20,
  },
  largeText: {
    fontSize: 25,
  },
});

export default sharedStyles;
