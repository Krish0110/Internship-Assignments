import { FETCH_TASKS } from './action';

/* eslint-disable default-param-last */
const initialState = {
  tasks: [],
};

const taskReducer = (state = initialState, action) => {
  console.log('Reducer', state);
  switch (action.type) {
    case FETCH_TASKS:
      return {
        ...state,
        tasks: [...state.tasks, ...action.payload],
      };
    default:
      return state;
  }
};

export default taskReducer;
