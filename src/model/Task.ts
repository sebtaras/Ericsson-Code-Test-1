import {Item} from './Item';
import {User} from './User';

export type Task = {
  id: number | string | number[];
  ownerId: number | string | number[];
  name: string;
  checklist: Item[];
};
