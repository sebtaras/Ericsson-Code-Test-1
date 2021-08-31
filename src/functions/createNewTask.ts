import {Item} from '../model/Item';
import uuid from 'react-native-uuid';
import {Task} from '../model/Task';

export const createNewTask = (
  name: string,
  ownerId: number | string | number[],
): Task => {
  return {
    id: uuid.v4(),
    ownerId: ownerId,
    name: name,
    checklist: [],
  };
};
