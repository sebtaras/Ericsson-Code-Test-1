import {PermissionsAndroid, PermissionStatus} from 'react-native';

export async function requestLocationPermission(): Promise<PermissionStatus> {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    return granted;
  } catch (err) {
    console.warn(err);
    return 'denied';
  }
}
