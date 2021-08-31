import {combineReducers} from 'redux';
import userReducer from './slices/userSlice';
import taskReducer from './slices/taskSlice';

const rootReducer = combineReducers({
  user: userReducer,
  tasks: taskReducer,
});

export default rootReducer;
