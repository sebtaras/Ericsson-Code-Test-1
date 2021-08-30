import React from 'react';
import {View, Text} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {getHeight, getWidth} from '../functions/getDimensions';
import sharedStyles from '../styles/shared';

const LocationScreen: React.FC = () => {
  return (
    <View style={[sharedStyles.flexContainer]}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{height: getHeight(), width: getWidth()}}
      />
    </View>
  );
};

export default LocationScreen;
