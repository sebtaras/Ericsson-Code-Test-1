import {Item} from './src/model/Item';
import {Task} from './src/model/Task';
import {User} from './src/model/User';

export const users: User[] = [
  {
    email: 'a',
    password: 'a',
  },
  {
    email: 'user1@mail.com',
    password: 'asdasd',
  },
  {
    email: 'etk@mail.com',
    password: 'asdasd',
  },
];

const Task1: Task = {
  name: 'Task 1',
  checklist: [
    {
      text: 'part 1',
      complete: true,
    },
    {
      text: 'part 2',
      complete: false,
    },
  ],
};
const Task2: Task = {
  name: 'Task 2',
  checklist: [
    {
      text: 'part 1',
      complete: false,
    },
    {
      text: 'part 2',
      complete: false,
    },
  ],
};

export const tasks: Task[] = [Task1, Task2];
