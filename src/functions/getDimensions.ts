import {Dimensions} from 'react-native';

export const getHeight = () => {
  return Dimensions.get('window').height;
};

export const getWidth = () => {
  return Dimensions.get('window').width;
};
