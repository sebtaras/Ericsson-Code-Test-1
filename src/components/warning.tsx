import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {getWidth} from '../functions/getDimensions';
import sharedStyles from '../styles/shared';

const styles = StyleSheet.create({
  warningContainer: {
    display: 'flex',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    height: 30,
    width: getWidth(),
    backgroundColor: 'red',
  },
});

const Warning: React.FC = () => {
  return (
    <View style={[styles.warningContainer]}>
      <Text style={[sharedStyles.whiteText]}>
        Location permission is denied
      </Text>
    </View>
  );
};

export default Warning;
