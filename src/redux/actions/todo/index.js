import {SET_TODO_DATA} from '../../action-types';

export const setTodoData = payload => {
  return {type: SET_TODO_DATA, payload};
};

export const createTodoItem = data => {
  return async dispatch => {
    dispatch(setTodoData(data));
  };
};
