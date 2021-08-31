import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {tasks} from '../../../tempData';
import {Item} from '../../model/Item';
import {Task} from '../../model/Task';

export const taskSlice = createSlice({
  name: 'todo',
  initialState: {
    tasks: tasks,
  },
  reducers: {
    addTaskItem: (state, action: PayloadAction<addTaskItemAction>) => {
      console.log(action);
      for (const task of state.tasks) {
        if (task.id == action.payload.taskId) {
          state.tasks[state.tasks.indexOf(task)].checklist.push(
            action.payload.item,
          );
        }
      }
    },
    addTask: (state, action: PayloadAction<addTaskAction>) => {
      state.tasks.push(action.payload.task);
    },
    removeTaskItem: (state, action: PayloadAction<removeTaskItemAction>) => {
      console.log(action);
      for (const task of state.tasks) {
        if (task.id == action.payload.taskId) {
          const index = state.tasks.indexOf(task);
          state.tasks[index].checklist = state.tasks[index].checklist.filter(
            item => item.id != action.payload.itemId,
          );
        }
      }
    },
    removeTask: (state, action: PayloadAction<removeTaskAction>) => {
      state.tasks = state.tasks.filter(
        task => task.id != action.payload.taskId,
      );
    },
    updateItemStatus: (
      state,
      action: PayloadAction<updateItemStatusAction>,
    ) => {
      for (const task of state.tasks) {
        if (task.id == action.payload.taskId) {
          const taskIndex = state.tasks.indexOf(task);
          for (const item of state.tasks[taskIndex].checklist) {
            if (item.id == action.payload.itemId) {
              const itemIndex = state.tasks[taskIndex].checklist.indexOf(item);
              state.tasks[taskIndex].checklist[itemIndex].complete =
                action.payload.complete;
            }
          }
        }
      }
    },
  },
});

interface addTaskItemAction {
  taskId: number | string | number[];
  item: Item;
}

interface addTaskAction {
  task: Task;
}

interface removeTaskItemAction {
  taskId: number | string | number[];
  itemId: number | string | number[];
}

interface removeTaskAction {
  taskId: number | string | number[];
}
interface updateItemStatusAction {
  taskId: number | string | number[];
  itemId: number | string | number[];
  complete: boolean;
}

export const {
  addTaskItem,
  removeTaskItem,
  addTask,
  removeTask,
  updateItemStatus,
} = taskSlice.actions;

export default taskSlice.reducer;
