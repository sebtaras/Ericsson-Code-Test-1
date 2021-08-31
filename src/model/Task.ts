import {Item} from './Item';
import {User} from './User';

export type Task = {
  ownerId: number;
  name: string;
  checklist: Item[];
};
