import AsyncStorage from '@react-native-async-storage/async-storage';
import {User} from './src/model/User';

export const clearStorage = async () => {
  AsyncStorage.clear();
};

export const storeLoggedInUser = (user: User) => {
  try {
    AsyncStorage.setItem('loggedInUser', JSON.stringify(user));
  } catch {}
};

export const clearLoggedInUser = () => {
  AsyncStorage.setItem('loggedInUser', JSON.stringify(null));
};

export const getLoggedInUser = async () => {
  try {
    const res = await AsyncStorage.getItem('loggedInUser');
    return res != null ? JSON.parse(res) : null;
  } catch {
    return null;
  }
};
