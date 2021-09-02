import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text} from 'react-native';
import {primaryColor, SeparatorType} from '../../constants';
import {getWidth} from '../functions/getDimensions';

const style = StyleSheet.create({
  separator: {
    borderWidth: 0.5,
    height: 1,
    borderColor: '#aaa',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wideSeparator: {
    width: getWidth() - 20,
  },
  regularSeparator: {
    width: getWidth() - 100,
  },
  narrowSeparator: {
    width: getWidth() - 200,
  },
});

interface SeparatorProps {
  type?: SeparatorType;
  margin?: number;
}

export const getSeparatorWidth = (type?: SeparatorType) => {
  switch (type) {
    case SeparatorType.WIDE:
      return style.wideSeparator;
    case SeparatorType.NARROW:
      return style.narrowSeparator;
    case SeparatorType.REGULAR:
      return style.regularSeparator;
    default:
      return style.regularSeparator;
  }
};

const Separator: React.FC<SeparatorProps> = ({type, margin}) => {
  return (
    <View style={[style.container]}>
      <View
        style={[
          style.separator,
          getSeparatorWidth(type),
          {margin: margin},
        ]}></View>
    </View>
  );
};

export default Separator;
