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
  id: 1,
  ownerId: 1,
  name: 'Task 1',
  checklist: [
    {
      id: 1,
      text: 'part 1',
      complete: true,
    },
    {
      id: 2,
      text: 'part 2',
      complete: false,
    },
  ],
};
const Task2: Task = {
  id: 2,
  ownerId: 2,
  name: 'Task 2',
  checklist: [
    {
      id: 3,
      text: 'part 1',
      complete: false,
    },
    {
      id: 4,
      text: 'part 2',
      complete: false,
    },
  ],
};

const Task3: Task = {
  id: 3,
  ownerId: 2,
  name: 'Task 2',
  checklist: [
    {
      id: 5,
      text: 'part 1',
      complete: false,
    },
    {
      id: 6,
      text: 'part 2',
      complete: false,
    },
  ],
};

export const tasks: Task[] = [Task1, Task2, Task3];
