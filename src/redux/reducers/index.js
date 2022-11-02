import {combineReducers} from 'redux';
import todoReducer, {todoInitialState} from './todo';
import userReducer, {userInitialState} from './user';

export const rootReducer = combineReducers({
  todo: todoReducer,
  user: userReducer,
});

export const getInitialState = () => ({
  todo: todoInitialState,
  user: userInitialState,
});
