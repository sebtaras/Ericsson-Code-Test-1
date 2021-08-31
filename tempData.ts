import {isDraft} from '@reduxjs/toolkit';
import {Item} from './src/model/Item';
import {Task} from './src/model/Task';
import {User} from './src/model/User';

export const users: User[] = [
  {
    id: 1,
    email: 'a',
    password: 'a',
    bio: 'text acc',
  },
  {
    id: 2,
    email: 'user@mail.com',
    password: 'asdasd',
    bio: 'bio',
  },
  {
    id: 3,
    email: 'etk@mail.com',
    password: 'asdasd',
    bio: 'bio',
  },
  {
    id: 4,
    email: 'b',
    password: 'b',
    bio: 'bioooo',
  },
];

const Task1: Task = {
  ownerId: 1,
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
  ownerId: 2,
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

const Task3: Task = {
  ownerId: 2,
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

export const tasks: Task[] = [Task1, Task2, Task3];
