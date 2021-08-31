import {PermissionsAndroid} from 'react-native';

export const checkHasLocationPermission = async () => {
  return PermissionsAndroid.check(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  );
};
