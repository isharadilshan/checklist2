import {SET_TODO_DATA} from '../../action-types';

export const todoInitialState = {
  todoList: [],
};

const todoReducer = (state = todoInitialState, action) => {
  switch (action.type) {
    case SET_TODO_DATA:
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    default:
      return state;
  }
};

export default todoReducer;
