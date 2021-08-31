import {Item} from '../model/Item';
import uuid from 'react-native-uuid';
import {Task} from 'react-native';

export const createNewItem = (text: string): Item => {
  return {
    id: uuid.v4(),
    complete: false,
    text: text,
  };
};
