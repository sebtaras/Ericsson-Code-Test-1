import React, {useState} from 'react';
import {useEffect} from 'react';
import {PermissionsAndroid} from 'react-native';
import {PermissionStatus} from 'react-native';
import {View, Text} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {getHeight, getWidth} from '../functions/getDimensions';
import sharedStyles from '../styles/shared';
import Geolocation from 'react-native-geolocation-service';
import {requestLocationPermission} from '../functions/requestLocationPermission';
import {markerLocation} from '../types/markerLocation';
import {StyleSheet} from 'react-native';
import Warning from '../components/warning';
import Checklist from './checklist';
import {checkHasLocationPermission} from '../functions/checkHasLocationPermission';

const LocationScreen: React.FC = () => {
  const [granted, setGranted] = useState(false);
  const [location, setLocation] = useState<markerLocation>(null);

  useEffect(() => {
    async function setupLocation() {
      await requestLocationPermission();
      const granted = await checkHasLocationPermission();
      if (granted) {
        setGranted(true);
        Geolocation.getCurrentPosition(
          position => {
            setLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          },
          error => {
            console.log(error);
          },
          {enableHighAccuracy: true, maximumAge: 100000},
        );
      } else {
        setGranted(false);
      }
    }
    setupLocation();
  });

  return (
    <View style={[sharedStyles.flexCenteredContainer]}>
      <View style={{height: getHeight(), width: getWidth()}}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{height: getHeight(), width: getWidth()}}>
          {location && (
            <Marker
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
              }}
              title="My location"
            />
          )}
        </MapView>
      </View>
      {!granted && <Warning />}
    </View>
  );
};

export default LocationScreen;
